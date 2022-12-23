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
using System.Globalization;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;
        private readonly IUserService _userService;

        public UserController(IMapper mapper,IUnitOfWork uow, UserManager<ActiBookingUser> userManager, IUserService userService )
        {
            _mapper = mapper;
            _uow = uow;
            _userManager = userManager;
            _userService = userService;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUser(string userId)
        {
            var user = await _uow.UserRepo.GetAsync(filter: x => x.Id == userId, includeProperties: "Children");
            return Ok(user.FirstOrDefault());
        }

        [HttpPost("add-child")]
        public async Task<IActionResult> AddChild(AddingChildDTO addingChildDTO)
        {
            await _userService.AddChild(addingChildDTO, _uow,_mapper);
            return Ok("Child Added");
        }

        [HttpGet("Get-user-courses/{userId}")]
        public async Task<IActionResult> GetUserCourses(string userId)
        {
            var courses = await _userService.GetUserCourses(userId, _uow);
            return Ok(courses);
        }

        [HttpPost("Add-user-to-course")]
        public async Task<IActionResult> AddUserToCourse(AddingUserToCourseDTO addingUserToCourse)
        {
            await _userService.AddUserToCourse(addingUserToCourse, _uow);
            return Ok("User Added to Course");

        }

        [HttpPost("Add-child-to-course")]
        public async Task<IActionResult> AddChildToCourse(AddingChildToCourseDTO addingChildToCourse)
        {
            await _userService.AddChildToCourse(addingChildToCourse,_uow);
            return Ok("Child Added to Course");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(UpdateUserDTO updateUserDTO)
        {
            await _userService.MapUserUpdateAsync(updateUserDTO, _uow);
            return Ok("User Updated");

        }
    }
}
