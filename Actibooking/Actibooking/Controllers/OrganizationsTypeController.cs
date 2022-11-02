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
    public class OrganizationsTypeController : ControllerBase
    {

        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsTypeController> _logger;
        public OrganizationsTypeController(IUnitOfWork uow, ILogger<OrganizationsTypeController> logger)
        {
            _uow = uow;
            _logger = logger;
        }

        [HttpGet("get-all-organization-types")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var organizationsType = await _uow.OrganizationTypeRepo.GetAsync();
                return Ok(organizationsType);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAll)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }

        }

        [HttpGet("get-organization-type/{id}")]
        public async Task<IActionResult> GetOrganizationType(int id)
        {
            try
            {
                var organizationType = await _uow.OrganizationTypeRepo.GetByIdAsync(id);
                return Ok(organizationType);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetOrganizationType)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPost("create-organization-type")]
        public async Task<IActionResult> CreateOrganizationType(OrganizationType organizationType)
        {
            try
            {
                await _uow.OrganizationTypeRepo.InsertAsync(organizationType);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(CreateOrganizationType)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpDelete]
        [Authorize]
        [Route("delete-organization-type/{id}")]
        public async Task<IActionResult> DeleteOrganizationType(int id)
        {
            try
            {
                await _uow.OrganizationTypeRepo.DeleteAsync(id);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(DeleteOrganizationType)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPut]
        [Route("update-organization-type/{id}")]
        public async Task<IActionResult> UpdateOrganizationType(int id)
        {
            return Ok();
        }
    }
}
