using Actibooking.Data.Repository;
using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdressController : Controller
    {

        private readonly IUnitOfWork _uow;
        private readonly ILogger<AdressController> _logger;

        public AdressController(IUnitOfWork uow, ILogger<AdressController> logger)
        {
            _uow = uow;
            _logger = logger;
        }
        [HttpGet()]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var adresses = await _uow.AdressRepo.GetAsync();
                return Ok(adresses);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAll)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdress(int id)
        {
            try
            {
                var adress = await _uow.AdressRepo.GetByIdAsync(id);
                return Ok(adress);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAdress)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPost()]
        public async Task<IActionResult> CreateAdress(Address adress)
        {
            try
            {
                await _uow.AdressRepo.InsertAsync(adress);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(CreateAdress)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteAdress(int id)
        {
            try
            {
                await _uow.AdressRepo.DeleteAsync(id);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(DeleteAdress)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateAdress(int adressId)
        {
            return Ok();
        }
    }
}
