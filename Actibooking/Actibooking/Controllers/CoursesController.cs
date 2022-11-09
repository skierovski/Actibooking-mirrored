using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsController> _logger;
        private readonly IMapper _mapper;
        public CoursesController(IUnitOfWork uow, ILogger<OrganizationsController> logger, IMapper mapper)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("get-all-courses")]
        public async Task<IEnumerable<Course>> GetAll()
        {
            return await _uow.CourseRepo.GetAsync();
        }

        [HttpGet("get-course/{id}")]
        public async Task<Course> GetAllCourses(int id)
        {
            return await _uow.CourseRepo.GetByIdAsync(id);
        }

        [HttpPost("create-course/id")]
        public async Task<bool> CreateCourse([FromBody] CourseDTO courseDTO, int organizationId)
        {
            try
            {
                Organization org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
                if (org is not null)
                {
                    var course = _mapper.Map<Course>(courseDTO);
                    await _uow.CourseRepo.InsertAsync(course);
                    org.Courses.Add(course);
                    await _uow.SaveChangesAsync();
                    return true;
                }
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(GetAll)}");
            }
            return false;
        }

        [HttpDelete("delete-course/{id}")]
        public async Task<bool> DeleteCourse(int courseId)
        {
            return true;
        }

        [HttpPut]
        [Route("update-course/{id}")]
        public async Task<bool> UpdateCourse(int courseId)
        {
            return true;
        }
    }
}