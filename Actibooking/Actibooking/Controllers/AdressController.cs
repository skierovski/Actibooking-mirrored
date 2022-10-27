using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    public class AdressController : Controller
    {
        [HttpGet("get-all-adresse/{id}")]
        public async Task<bool> GetAllAdress(int organizationId)
        {
            return true;
        }

        [HttpPost("create-adress/id")]
        public async Task<bool> CreateAdress(Adress adress, int organizationId)
        {
            return true;
        }

        [HttpDelete]
        [Route("delete-adress/{id}")]
        public async Task<bool> DeleteAdress(int adressId)
        {
            return true;
        }

        [HttpPut]
        [Route("update-adress/{id}")]
        public async Task<bool> UpdateAdress(int adressId)
        {
            return true;
        }
    }
}
