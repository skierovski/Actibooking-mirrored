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
            var newChild = _mapper.Map<Child>(addingChildDTO);
            await _uow.ChildRepo.InsertAsync(newChild);
            await _uow.SaveChangesAsync();
            return Ok("Child Added");
        }

        [HttpGet("Get-user-courses/{id}")]
        public async Task<IActionResult> GetUserCourses(string id)
        {
            ActiBookingUser user = await _userManager.FindByIdAsync(id);
            return Ok(user.Courses.ToList());
        }

        [HttpPost("Add-user-to-course")]
        public async Task<IActionResult> AddUserToCourse(AddingUserToCourseDTO addingUserToCourse)
        {
            // need to be validate, and add some property to Course
            ActiBookingUser user = await _userManager.FindByIdAsync(addingUserToCourse.ActiBookingUserId);
            Course course = await _uow.CourseRepo.GetByIdAsync(addingUserToCourse.CourseId);
            user.Courses = new List<Course>();
            user.Courses.Add(course);
            await _userManager.UpdateAsync(user);
            await _uow.SaveChangesAsync();
            return Ok("User Added to Course");
        }
    }
}
