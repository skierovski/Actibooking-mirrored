using Actibooking.Data;
using Actibooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationsController : ControllerBase
    {

        [HttpGet("get-all-organizations")]
        public async Task<bool> GetAll()
        {
            return true;
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
