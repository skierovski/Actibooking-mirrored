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
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ILogger<AccountController> _logger;
        private readonly IAuthManager _authManager;
        private readonly IUnitOfWork _uow;

        public UserController(IMapper mapper,
            ILogger<AccountController> logger,
            IAuthManager authManager,
            IUnitOfWork uow)
        {
            _mapper = mapper;
            _logger = logger;
            _authManager = authManager;
            _uow = uow;
        }

        [HttpPost("add-child")]
        public async Task<IActionResult> AddChild(AddingChildDTO addingChildDTO)
        {
            var newChild = _mapper.Map<Child>(addingChildDTO);
            await _uow.ChildRepo.InsertAsync(newChild);
            await _uow.SaveChangesAsync();
            return Ok("Child Added");
        }
    }
}
