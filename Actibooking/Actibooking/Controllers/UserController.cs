using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Actibooking.Exceptions;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;

        public UserController(IMapper mapper,IUnitOfWork uow, UserManager<ActiBookingUser> userManager )
        {
            _mapper = mapper;
            _uow = uow;
            _userManager = userManager;
        }

        [HttpPost("add-child")]
        public async Task<IActionResult> AddChild(AddingChildDTO addingChildDTO)
        {
            if(await _userManager.FindByIdAsync(addingChildDTO.ActiBookingUserId) != null)
            {
                var newChild = _mapper.Map<Child>(addingChildDTO);
                await _uow.ChildRepo.InsertAsync(newChild);
                await _uow.SaveChangesAsync();
                return Ok("Child Added");
            }
            throw new NotFoundException("User not Found", addingChildDTO.ActiBookingUserId);
        }

        [HttpGet("Get-user-courses/{userId}")]
        public async Task<IActionResult> GetUserCourses(string userId)
        {
            if (await _userManager.FindByIdAsync(userId) != null)
            {
                var actiBookingUsers = await _uow.UserRepo.GetAsync(filter: x => x.Id == userId, includeProperties: "Courses");
                var userCourseList = actiBookingUsers.Select(x => x.Courses).ToList()[0];
                if (userCourseList.Count() > 0)
                {
                    return Ok(userCourseList);
                }
                throw new NotFoundException("No activities", userId);
            }
            throw new NotFoundException("User not found", userId);

        }

        [HttpPost("Add-user-to-course")]
        public async Task<IActionResult> AddUserToCourse(AddingUserToCourseDTO addingUserToCourse)
        {
            if(await _userManager.FindByIdAsync(addingUserToCourse.ActiBookingUserId) != null)
            {
                ActiBookingUser user = await _userManager.FindByIdAsync(addingUserToCourse.ActiBookingUserId);
                if (await _uow.CourseRepo.GetByIdAsync(addingUserToCourse.CourseId) != null)
                {
                    Course course = await _uow.CourseRepo.GetByIdAsync(addingUserToCourse.CourseId);
                    user.Courses = new List<Course>(); 
                    user.Courses.Add(course);
                    await _userManager.UpdateAsync(user);
                    await _uow.SaveChangesAsync();
                    return Ok("User Added to Course");
                }
                throw new NotFoundException("Course not found", addingUserToCourse.CourseId);
            }
            throw new NotFoundException("User not found", addingUserToCourse.ActiBookingUserId);
        }

        [HttpPost("Add-child-to-course")]
        public async Task<IActionResult> AddChildToCourse(AddingChildToCourseDTO addingChildToCourse)
        {
            if (await _userManager.FindByIdAsync(addingChildToCourse.ActiBookingUserId) != null)
            {
                ActiBookingUser user = await _userManager.FindByIdAsync(addingChildToCourse.ActiBookingUserId);
                if (await _uow.ChildRepo.GetByIdAsync(addingChildToCourse.ChildId) != null)
                {
                    Child child = await _uow.ChildRepo.GetByIdAsync(addingChildToCourse.ChildId);
                    if (await _uow.CourseRepo.GetByIdAsync(addingChildToCourse.CourseId) != null)
                    {
                        Course course = await _uow.CourseRepo.GetByIdAsync(addingChildToCourse.CourseId);
                        child.Courses = new List<Course>();
                        child.Courses.Add(course);
                        await _userManager.UpdateAsync(user);
                        await _uow.SaveChangesAsync();
                        return Ok("Child Added to Course");
                    }
                    throw new NotFoundException("Course not found", addingChildToCourse.CourseId);
                }
                throw new NotFoundException("Child not found", addingChildToCourse.ChildId);
            }
            throw new NotFoundException("User not found", addingChildToCourse.ActiBookingUserId);
        }

    }
}
