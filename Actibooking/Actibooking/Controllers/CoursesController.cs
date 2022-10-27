using Actibooking.Data;
using Actibooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {

        [HttpGet("get-all-courses/{id}")]
        public async Task<bool> GetAllCourses(int organizationId)
        {
            return true;
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