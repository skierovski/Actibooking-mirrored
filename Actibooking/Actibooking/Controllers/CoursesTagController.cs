using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
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
        private readonly IMapper _mapper;
        public CoursesTagController(IUnitOfWork uow, ILogger<CoursesTagController> logger, IMapper mapper)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
        }

        [Authorize(Roles = "Admin")]
        [HttpGet()]
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

        [HttpGet("{id}")]
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

        [HttpPost()]
        public async Task<IActionResult> CreateCourseTag(CourseTagDTO courseTagDTO)
        {
            try
            {
                var courseTag = _mapper.Map<CourseTag>(courseTagDTO);
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
        [Route("{id}")]
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
        [Route("{id}")]
        public async Task<IActionResult> UpdateCourseTag(CourseTagDTO courseTagDTO)
        {
            var courseTag = _mapper.Map<CourseTag>(courseTagDTO);
            _uow.CourseTagRepo.Update(courseTag);
            await _uow.SaveChangesAsync();
            return Ok();
        }
    }
}