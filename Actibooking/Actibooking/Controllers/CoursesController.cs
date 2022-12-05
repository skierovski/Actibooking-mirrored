using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NuGet.DependencyResolver;
using System.Collections.Generic;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICoursesManager _courseManager;
        public CoursesController(ICoursesManager courseManager)
        {
            _courseManager = courseManager;
        }

        [HttpGet("")]
        public async Task<IEnumerable<Course>> GetAll()
        {
            return await _courseManager.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<Course> GetCourse(int id)
        {
            return await _courseManager.GetCourse(id);
        }

        [HttpPost("create")]
        public async Task<bool> CreateCourse([FromBody] CourseDTO courseDTO, int organizationId)
        {
            return await _courseManager.CreateCourse(courseDTO, organizationId);
        }

        [HttpDelete("{courseId}")]
        public async Task<bool> DeleteCourse(int courseId)
        {
            return await _courseManager.DeleteCourse(courseId);
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateCourse([FromQuery] CourseDTO courseDTO)
        {
            if (await _courseManager.UpdateCourse(courseDTO))
            {
                return Ok("Course updated successfuly");
            }
            throw new NotFoundException("Course", courseDTO);
        }

        [HttpGet("{courseId}/participants")]
        public async Task<IActionResult> GetParticipantsCourse(int courseId)
        {
            Dictionary<string, List<object>> participants = await _courseManager.GetParticipantsCourse(courseId);
            return Ok(participants);
        }
    }
}