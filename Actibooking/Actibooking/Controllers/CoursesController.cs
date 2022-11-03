using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesTagController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly ILogger<CoursesTagController> _logger;
        public CoursesTagController(IUnitOfWork uow, ILogger<CoursesTagController> logger)
        {
            _uow = uow;
            _logger = logger;
        }

        [HttpGet("get-all-courses-tag")]
        public async Task<IActionResult> GetAll()
        {

            try
            {
                var coursesTag = await _uow.CourseTagRepo.GetAsync();
                return Ok(coursesTag);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAll)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpGet("get-course-tag/{id}")]
        public async Task<IActionResult> GetCourseTag(int id)
        {
            try
            {
                var courseTag = await _uow.CourseTagRepo.GetByIdAsync(id);
                return Ok(courseTag);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetCourseTag)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPost("create-course-tag")]
        public async Task<IActionResult> CreateCourseTag(CourseTag courseTag)
        {
            try
            {
                await _uow.CourseTagRepo.InsertAsync(courseTag);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(CreateCourseTag)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpDelete]
        [Route("delete-course-tag/{id}")]
        public async Task<IActionResult> DeleteCourseTag(int id)
        {
            try
            {
                await _uow.CourseTagRepo.DeleteAsync(id);
                await _uow.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(DeleteCourseTag)}");
                return StatusCode(500, "Internal Server Error. Please Try Again Later.");
            }
        }

        [HttpPut]
        [Route("update-course-tag/{id}")]
        public async Task<IActionResult> UpdateCourseTag(int id)
        {
            return Ok();
        }
    }
}