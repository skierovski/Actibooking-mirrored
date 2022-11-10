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
    public class OrganizationsTypeController : ControllerBase
    {

        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsTypeController> _logger;
        private readonly IMapper _mapper;
        public OrganizationsTypeController(IUnitOfWork uow, ILogger<OrganizationsTypeController> logger, IMapper mapper)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("get-all-organization-types")]
        public async Task<IActionResult> GetAll()
        {
            var organizationsType = await _uow.OrganizationTypeRepo.GetAsync();
            return Ok(organizationsType);
        }

        [HttpGet("get-organization-type/{id}")]
        public async Task<IActionResult> GetOrganizationType(int id)
        {
            var organizationType = await _uow.OrganizationTypeRepo.GetByIdAsync(id);
            
            if(organizationType == null)
            {
                throw new NotFoundException(nameof(GetOrganizationType), id);
            }
            return Ok(organizationType);
     
        }

        [HttpPost("create-organization-type")]
        public async Task<IActionResult> CreateOrganizationType(OrganizationType organizationType)
        {
            await _uow.OrganizationTypeRepo.InsertAsync(organizationType);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("delete-organization-type/{id}")]
        public async Task<IActionResult> DeleteOrganizationType(int id)
        {
            await _uow.OrganizationTypeRepo.DeleteAsync(id);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        [Route("update-organization-type/")]
        public async Task<IActionResult> UpdateOrganizationType(OrganizationTypeDTO organizationTypeDTO)
        {
            var organizationType = _mapper.Map <OrganizationType>(organizationTypeDTO);
            _uow.OrganizationTypeRepo.Update(organizationType);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}
