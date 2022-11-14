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
                IEnumerable<Organization> organizations = await _uow.OrganizationRepo.GetAsync(includeProperties: "OrganizationTypes,Courses,Adresses,Trainers");
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
                IEnumerable<Organization> organization = await _uow.OrganizationRepo.GetAsync(filter: o => o.Id == id, includeProperties: "OrganizationTypes,Courses,Adresses,Trainers");
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
            Organization organization = _mapper.Map<Organization>(newOrganizationDTO);
            await _uow.OrganizationRepo.InsertAsync(organization);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("delete-organization/{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteOrganization(int id)
        {
            await _uow.OrganizationRepo.DeleteAsync(id);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        //
        [HttpPut("update-organization")]
        public async Task<IActionResult> UpdateOrganization(OrganizationDTO organizationDTO)
        {
            Organization organization = _mapper.Map<Organization>(organizationDTO);
            _uow.OrganizationRepo.Update(organization);
            await _uow.SaveChangesAsync();
            return Ok();
        }

    }
}
