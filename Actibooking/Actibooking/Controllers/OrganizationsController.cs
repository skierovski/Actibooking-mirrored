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
using System.Collections;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;


        private readonly IOrganizationManager _organizationManager;
        public OrganizationsController(IUnitOfWork uow, IOrganizationManager organizationManager)
        {
            _uow = uow;
            _organizationManager = organizationManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            /*var organizations = await _organizationManager.CheckIfEmpty();*/
            var organizations = await _uow.OrganizationRepo.GetAsync(includeProperties: "Addresses,Ratings", orderBy: q => q.OrderByDescending(d => d.Ratings.AverageRating));
            return Ok(organizations);                                      
        }

        [HttpGet("top10")]
        public async Task<IActionResult> GetTop10()
        {
            /*var actiBookingUsers = await _uow.UserRepo.GetAsync(filter: x => x.Id == userId, includeProperties: "Participants");*/
            var organizations = await _uow.OrganizationRepo.GetAsync(includeProperties: "Addresses,Ratings", orderBy: q => q.OrderByDescending(d => d.Ratings.AverageRating));
            var top10 = organizations.Take(10);
            return Ok(top10);
        }

        [HttpGet("top10/{UserCity}")]
        public async Task<IActionResult> GetTop10FromCity(string UserCity)
        {
            /*var actiBookingUsers = await _uow.UserRepo.GetAsync(filter: x => x.Id == userId, includeProperties: "Participants");*/
            var organizations = await _uow.OrganizationRepo.GetAsync(filter: x => x.Addresses.City == UserCity, includeProperties: "Addresses,Ratings", orderBy: q => q.OrderByDescending(d => d.Ratings.AverageRating));
            var top10 = organizations.Take(10);
            return Ok(top10);
        }

        [HttpGet("{organizationId}")]
        public async Task<IActionResult> GetOrganization(int organizationId)
        {
            var organization = await _uow.OrganizationRepo.GetAsync(filter: x => x.Id == organizationId, includeProperties: "Addresses,Ratings", orderBy: q => q.OrderByDescending(d => d.Ratings.AverageRating));
            return Ok(organization);            
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateOrganization(NewOrganizationDTO newOrganizationDTO)
        {
            await _organizationManager.MapOrganization(newOrganizationDTO);
            return Ok("Organization created");
        }

        [HttpDelete("{organizationId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteOrganization(int organizationId)
        {
            await _uow.OrganizationRepo.DeleteAsync(organizationId);
            await _uow.SaveChangesAsync();
            return Ok("Organization deleted");
        }

        [HttpPut("update")]
        public async Task<IActionResult> UpdateOrganization(UpdateOrganizationDTO updateOrganizationDTO)
        {
            await _organizationManager.ConvertOrganization(updateOrganizationDTO);
            return Ok("Organization Updated");
        }

        [HttpPut("update-name")]
        public async Task<IActionResult> UpdateName([FromBody] UpdateOrganizationNameDTO updateOrganizationNameDTO)
        {
            var organization = await _uow.OrganizationRepo.GetAsync(filter: x => x.Id == updateOrganizationNameDTO.Id);
            var editOrganization = organization.FirstOrDefault();
            editOrganization.Name = updateOrganizationNameDTO.Name;
            _uow.OrganizationRepo.Update(editOrganization);
            await _uow.SaveChangesAsync();
            return Ok();
        }
        [HttpPut("update-logo")]
        public async Task<IActionResult> UpdateLogo([FromBody] UpdateOrganizationLogoDTO updateOrganizationLogoDTO)
        {
            var organization = await _uow.OrganizationRepo.GetAsync(filter: x => x.Id == updateOrganizationLogoDTO.Id);
            var editOrganization = organization.FirstOrDefault();
            editOrganization.LogoUrl = updateOrganizationLogoDTO.LogoUrl;
            _uow.OrganizationRepo.Update(editOrganization);
            await _uow.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("update-description")]
        public async Task<IActionResult> UpdateDescription([FromBody] UpdateOrganizationDescriptionDTO updateOrganizationDescriptionDTO)
        {
            var organization = await _uow.OrganizationRepo.GetAsync(filter: x => x.Id == updateOrganizationDescriptionDTO.Id);
            var editOrganization = organization.FirstOrDefault();
            editOrganization.Description = updateOrganizationDescriptionDTO.Description;
            _uow.OrganizationRepo.Update(editOrganization);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}
