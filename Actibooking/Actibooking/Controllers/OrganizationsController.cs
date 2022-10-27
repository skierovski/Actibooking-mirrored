using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {

        private readonly IUnitOfWork _uow;
        public OrganizationsController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [HttpGet("get-all-organizations")]
        public async Task<IEnumerable<Organization>> GetAll()
        {
            return await _uow.OrganizationRepo.GetAsync();
        }

        [HttpGet("get-organization/{id}")]
        public async Task<Organization> GetOrganization(int id)
        {
            return await _uow.OrganizationRepo.GetByIdAsync(id);
        }

        [HttpPost("create-organization")]
        public async Task<bool>CreateOrganization(Organization organization)
        {
            return true;
        }

        [HttpDelete]
        [Route("delete-organization/{id}")]
        public async Task<bool> DeleteOrganization(int organizationId)
        {
            return true;
        }

        [HttpPut]
        [Route("update-organization/{id}")]
        public async Task<bool> UpdateOrganization(int organizationId)
        {
            return true;
        }
    }
}
