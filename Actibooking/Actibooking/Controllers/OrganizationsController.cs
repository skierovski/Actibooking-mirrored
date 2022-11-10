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
    public class OrganizationsController : ControllerBase
    {
        private readonly UserManager<ABUser> _userManager;
        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsController> _logger;
        private readonly IMapper _mapper;
        public OrganizationsController(IUnitOfWork uow, ILogger<OrganizationsController> logger, IMapper mapper)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("get-all-organizations")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var organizations = await _uow.OrganizationRepo.GetAsync();
                return Ok(organizations);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAll)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }

        }

        [HttpGet("get-organization/{id}")]
        public async Task<IActionResult> GetOrganization(int id)
        {
            try
            {
                var organization = await _uow.OrganizationRepo.GetByIdAsync(id);
                return Ok(organization);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetOrganization)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPost("create-organization")]
        public async Task<IActionResult> CreateOrganization([FromBody] NewOrganizationDTO newOrganizationDTO)
        {
            try
            {
                var organization = _mapper.Map<Organization>(newOrganizationDTO);
                await _uow.OrganizationRepo.InsertAsync(organization);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(CreateOrganization)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpDelete("delete-organization/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteOrganization(int id)
        {
            try
            {
                await _uow.OrganizationRepo.DeleteAsync(id);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(CreateOrganization)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPut("update-organization")]
        public async Task<IActionResult> UpdateOrganization(Organization organization)
        {
            try
            {
                _uow.OrganizationRepo.Update(organization);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(UpdateOrganization)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }
        [HttpPost("add-trainer")]
        public async Task<IActionResult> AddTrainer([FromQuery] int organizationId, int trainerId)
        {
            try
            {
                Organization org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
                Trainer trainer = await _uow.TrainerRepo.GetByIdAsync(trainerId);
                org.Trainers.Add(trainer);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(AddTrainer)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }
    }
}
