using Actibooking.Data.Repository;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController :ControllerBase
    {
        private readonly UserManager<ABUser> _userManager;
        private readonly IMapper _mapper;
        private readonly ILogger<AccountController> _logger;
        private readonly IAuthManager _authManager;
        private readonly IUnitOfWork _uow;

        public AccountController(UserManager<ABUser> userManager, 
            IMapper mapper, 
            ILogger<AccountController> logger,
            IAuthManager authManager,
            IUnitOfWork uow)
        {
            _userManager = userManager;
            _mapper = mapper;
            _logger = logger;
            _authManager = authManager;
            _uow = uow;
        }

        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Register([FromBody] UserDTO userDTO)
        {
            _logger.LogInformation($"Registration Attemp for {userDTO.Email}");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var user = _mapper.Map<ABUser>(userDTO);
                user.UserName = userDTO.Email;
                var result = await _userManager.CreateAsync(user, userDTO.Password);
                if (!result.Succeeded)
                {
                    foreach( var error in result.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);
                    }
                    return BadRequest("$User Registration Attemp Failed");
                }
                await _userManager.AddToRolesAsync(user,userDTO.Roles);
                return Accepted();
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Something Went Wrong in the{nameof(Register)}");
                return Problem($"Something Went Wrong in the{nameof(Register)}", statusCode: 500);
            }
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDTO userDTO)
        {
            _logger.LogInformation($"Login Attemp for {userDTO.Email}");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                if (!await _authManager.ValidateUser(userDTO))
                {
                    return Unauthorized();
                }
                return Accepted(new { Token = await _authManager.CreateToken() });
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Something Went Wrong in the{nameof(Login)}");
                return Problem($"Something Went Wrong in the{nameof(Login)}", statusCode: 500);
            }
        }

        [HttpPost("add-child")]

        public async Task<IActionResult> AddChild([FromQuery] string email, string name, string lastName)
        {
            _logger.LogInformation($"Add children Attemp for {email}");
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("First name and Last name can't be empty");
                }
                if(await _userManager.FindByEmailAsync(email) != null)
                {
                    var user = await _userManager.FindByEmailAsync(email);
                    var child = new Child { Name = name, LastName = lastName, ABUser = user };
                    await _uow.ChildRepo.InsertAsync(child);
                    await _uow.SaveChangesAsync();


                    return Ok("Child has been added");
                    
                }
                return BadRequest("User not in database");

            } 
            catch (Exception ex)
            {
                _logger.LogInformation($"Something Went Wrong in the adding child");
                return Problem($"Something Went Wrong in the adding child", statusCode: 500);
            }
            
        }

        [HttpGet]
        [Route("get-courses/{userId}")]
        public async Task<IActionResult> GetUserCourses(string userId)
        {
            try
            {
                var activeCourses = await _uow.AbuserRepo.GetByUserId(userId);
                if(activeCourses != null)
                {
                    return Ok(activeCourses);
                }
                return BadRequest("No Active Courses");
            }
            catch (Exception ex)
            {
                _logger.LogInformation($"Something Went Wrong in the getting courses");
                return Problem($"Something Went Wrong in the getting courses", statusCode: 500);
            }
        }
    }
}
