using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        public CoursesController(IUnitOfWork uow)
        {
            _uow = uow;
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
        public async Task<bool> CreateCourse(Course course, int organizationId)
        {
            return true;
        }

        [HttpDelete]
        [Route("delete-course/{id}")]
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