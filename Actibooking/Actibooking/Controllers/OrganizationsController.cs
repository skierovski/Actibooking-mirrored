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
        public OrganizationsController(IUnitOfWork uow, ILogger<OrganizationsController> logger)
        {
            _uow = uow;
            _logger = logger;
        }

        [HttpGet("get-all-organizations")]
        [Authorize(Roles = "User,Admin")]
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
        public async Task<IActionResult> CreateOrganization(Organization organization)
        {
            try
            {
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

        [HttpPut]
        [Route("update-organization/{id}")]
        public async Task<IActionResult> UpdateOrganization(int Id)
        {
            return Ok();
        }
    }
}
