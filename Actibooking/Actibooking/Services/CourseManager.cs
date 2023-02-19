using Actibooking.Controllers;
using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Models.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NuGet.DependencyResolver;

namespace Actibooking.Services
{
    public class CourseManager: ICoursesManager
    {
        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<ActiBookingUser> _userManager;
        public CourseManager(IUnitOfWork uow, ILogger<OrganizationsController> logger, IMapper mapper, UserManager<ActiBookingUser> userManager)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }


        public async Task<IEnumerable<Course>> GetAll()
        {
            IEnumerable<Course>? allCourses =  await _uow.CourseRepo.GetAsync();
            if (allCourses != null) return allCourses;
            throw new NotFoundException("Courses", allCourses);
        }


        public async Task<Course> GetCourse(int id)
        {
            Course course = await _uow.CourseRepo.GetByIdAsync(id);
            if (course != null) return course;
            throw new NotFoundException("Course", id);
        }

        public async Task<bool> CreateCourse([FromBody] CourseDTO courseDTO, int organizationId)
        {
            Organization organization = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (organization != null)
            {
                Course course = _mapper.Map<Course>(courseDTO);
                course.Id = 0;
                course.minAge = 1;
                course.maxAge = 99;
                await _uow.CourseRepo.InsertAsync(course);
                organization.Courses = new List<Course>() { course };
                await _uow.SaveChangesAsync();
                return true;
            }
            return false;
        }
        public async Task<bool> DeleteCourse(int courseId)
        {
            Course course = await _uow.CourseRepo.GetByIdAsync(courseId);
            if(course != null)
            {
                await _uow.CourseRepo.DeleteAsync(courseId);
                await _uow.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> UpdateCourse([FromQuery]CourseDTO courseDTO)
        {
            Course course = _mapper.Map<Course>(courseDTO);
            Course prevCourse = await _uow.CourseRepo.GetByIdAsync(course.Id);
            if (prevCourse != null)
            {
                if (course.Name != null) prevCourse.Name = course.Name;
                _uow.CourseRepo.Update(prevCourse);
                await _uow.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<Dictionary<string, List<object>>> GetParticipantsCourse(int courseId)
        {
            if (await _uow.CourseRepo.GetByIdAsync(courseId) != null)
            {
                Dictionary<string, List<object>> userList = new Dictionary<string, List<object>>();
                IEnumerable<Participant> participantsList = await _uow.ParticipantRepo.GetAsync(filter: x => x.CourseId == courseId);
                foreach (Participant participant in participantsList)
                {
                    if (participant.ChildId != null)
                    {
                        Child child = await _uow.ChildRepo.GetByIdAsync((int)participant.ChildId);
                        ChildDTO childDTO = _mapper.Map<ChildDTO>(child);
                        if (userList.ContainsKey("Child"))
                        {
                            userList["Child"].Add(childDTO);
                        }
                        else
                        {
                            userList["Child"] = new List<object>() { childDTO };
                        }
                    }
                    else
                    {
                        ActiBookingUser actiBookingUser = await _userManager.FindByIdAsync(participant.ActiBookingUserId);
                        GetCourseParticipantsUserDTO getCourseParticipantsUserDTO = _mapper.Map<GetCourseParticipantsUserDTO>(actiBookingUser);
                        if (userList.ContainsKey("User"))
                        {
                            userList["User"].Add(getCourseParticipantsUserDTO);
                        }
                        else
                        {
                            userList["User"] = new List<object>() { getCourseParticipantsUserDTO };
                        }

                    }
                }
                return userList;

            }
            throw new NotFoundException("Course", courseId);
        }

        public async Task<List<Course>> GetOrganizationCourses(int orgId)
        {
            var courseList = await _uow.CourseRepo.GetAsync(filter: x => x.OrganizationId == orgId);
            return (List<Course>)courseList;
        }

        public async Task<List<Course>> SearchPhrase(string phrase)
        {
            var courseList = await _uow.CourseRepo.GetAsync(filter: x => x.Name.Contains(phrase));
            return (List<Course>) courseList;
        }
    }
}
