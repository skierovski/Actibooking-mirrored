using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : Controller
    {

        private readonly IUnitOfWork _uow;
        private readonly ILogger<AdressController> _logger;

        public FileController(IUnitOfWork uow, ILogger<AdressController> logger)
        {
            _uow = uow;
            _logger = logger;
        }


        [HttpPost()]
        public async Task<IActionResult> File([FromForm] FileModel file)
        {
            try
            {
                string imageName = new String(Path.GetFileNameWithoutExtension(file.FileName).Take(10).ToArray()).Replace(' ', '-');
                imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(file.FileName);
                string path = Path.Combine(Directory.GetCurrentDirectory(), "Images", imageName);
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.FormFile.CopyToAsync(fileStream);
                }
                return Ok(file);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(File)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }
        /*
                public async Task<string> SaveImage(IFormFile imageFile)
                {
                    string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
                    imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
                    var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
                    using (var fileStream = new FileStream(imagePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(fileStream);
                    }
                    return imageName;

                }*/
    }
}
