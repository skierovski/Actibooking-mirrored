using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Actibooking.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _configuration;

        public UserService(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public async Task<IActionResult> AddChild(AddingChildDTO addingChildDTO, IUnitOfWork _uow, IMapper _mapper)
        {
            if (await _uow.UserRepo.GetAsync(filter: x => x.Id == addingChildDTO.ActiBookingUserId) != null)
            {
                var newChild = _mapper.Map<Child>(addingChildDTO);
                await _uow.ChildRepo.InsertAsync(newChild);
                await _uow.SaveChangesAsync();
            }
            throw new NotFoundException("User not Found", addingChildDTO.ActiBookingUserId);

        }

        public async Task<IEnumerable<Course>> GetUserCourses(string userId, IUnitOfWork _uow)
        {

            var actiBookingUsers = await _uow.UserRepo.GetAsync(filter: x => x.Id == userId, includeProperties: "Participants");
            CheckIsNull("User not found", actiBookingUsers, userId);

            var userCourseList = actiBookingUsers.Select(x => x.Participants).ToList()[0];


            if (userCourseList.Count() > 0)
            {
                List<Course> courses = new List<Course>();
                foreach (var userCourse in userCourseList)
                {
                    Course courseToAdd = await _uow.CourseRepo.GetByIdAsync(userCourse.Id);
                    courseToAdd.Participant = null;
                    courseToAdd.CourseTags = null;
                    courses.Add(courseToAdd);
                }
                return courses;
            }
            throw new NotFoundException("No activities", userId);

        }


        public async Task AddUserToCourse(AddingUserToCourseDTO addingUserToCourse, IUnitOfWork _uow)
        {
            ActiBookingUser user = await _uow.UserRepo.GetByIdAsync(addingUserToCourse.ActiBookingUserId);
            CheckIsNull("User not found", user, addingUserToCourse.ActiBookingUserId);

            Course course = await _uow.CourseRepo.GetByIdAsync(addingUserToCourse.CourseId);
            CheckIsNull("Course not found", course, addingUserToCourse.CourseId);


                Participant participant = new Participant() { ActiBookingUserId = user.Id, CourseId = course.Id };
                user.Participants = new List<Participant>() { participant };
                await _uow.SaveChangesAsync();

        }


        public async Task AddChildToCourse(AddingChildToCourseDTO addingChildToCourse, IUnitOfWork _uow)
        {
            ActiBookingUser user = await _uow.UserRepo.GetByIdAsync(addingChildToCourse.ActiBookingUserId);
            CheckIsNull("User not found", user, addingChildToCourse.ActiBookingUserId);

            Child child = await _uow.ChildRepo.GetByIdAsync(addingChildToCourse.ChildId);
            CheckIsNull("Child not found", child, addingChildToCourse.ChildId);
            
            Course course = await _uow.CourseRepo.GetByIdAsync(addingChildToCourse.CourseId);
            CheckIsNull("Course not found", course, addingChildToCourse.CourseId);

            CheckAge(child.BirthDate, course.minAge, course.maxAge);

            Participant participant = new Participant() { ActiBookingUserId = user.Id, CourseId = course.Id, ChildId = child.Id };
            child.Participant = new List<Participant>() { participant };
            await _uow.SaveChangesAsync();

        }


        public bool CheckIsNull(string massage, object ObjectToCheck, object Key)
        {
            if (ObjectToCheck == null)
            {
                throw new NotFoundException(massage, Key);
            }
            return true;
        }

        public bool CheckAge(string birthDate, int? minAge, int? maxAge)
        {
            var today = DateTime.Now.Date;
            var userBirthDate = Convert.ToDateTime(birthDate);
            var age = ((today - userBirthDate).TotalDays) / 365;
            if (age >= minAge && age <= maxAge)
            {
                return true;
            }
            throw new OutOfRangeException("Your age is not valid", minAge);
        }

        public async Task<bool> MapUserUpdateAsync(UpdateUserDTO updateUserDTO, IUnitOfWork _uow)
        {
            ActiBookingUser user = await _uow.UserRepo.GetByIdAsync(updateUserDTO.ActiBookingUserId);
            if (updateUserDTO.FirstName != null)
            {
                user.FirstName = updateUserDTO.FirstName;
            }
            if (updateUserDTO.LastName != null)
            {
                user.LastName = updateUserDTO.LastName;
            }
            if (updateUserDTO.BirthDate != null)
            {
                user.BirthDate = updateUserDTO.BirthDate;
            }
            if (updateUserDTO.Gender != null)
            {
                user.Gender = updateUserDTO.Gender;
            }
            _uow.UserRepo.Update(user);
            await _uow.SaveChangesAsync();
            return true;

        }

    }
}
