using Actibooking.Data.Repository;
using Actibooking.Exceptions;
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
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly IMapper _mapper;
        private readonly ILogger<AccountController> _logger;
        private readonly IAuthManager _authManager;
        private readonly IUnitOfWork _uow;


        public AccountController(UserManager<ActiBookingUser> userManager, 
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
           var user = _mapper.Map<ActiBookingUser>(userDTO);
           user.UserName = userDTO.Email;
           var result = await _userManager.CreateAsync(user, userDTO.Password);
           if (!result.Succeeded)
           {
                foreach( var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                throw new BadRequestException("Email already registred");
           }
           await _userManager.AddToRolesAsync(user,userDTO.Roles);
           return Ok("Account Created");
           
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDTO userDTO)
        {
            if (!await _authManager.ValidateUser(userDTO))
            {
                throw new UnauthorizedExeption(userDTO.Email);
            }
            return Accepted(new { Token = await _authManager.CreateToken() });
        }
    }
}
