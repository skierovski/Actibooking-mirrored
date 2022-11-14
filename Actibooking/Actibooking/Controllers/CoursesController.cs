using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private readonly ILogger<OrganizationsController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<ActiBookingUser> _userManager;
        public CoursesController(IUnitOfWork uow, ILogger<OrganizationsController> logger, IMapper mapper, UserManager<ActiBookingUser> userManager)
        {
            _uow = uow;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
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
            Organization org = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (org != null)
            {
                var course = _mapper.Map<Course>(courseDTO);
                await _uow.CourseRepo.InsertAsync(course);
                org.Courses = new List<Course>();
                org.Courses.Add(course);
                await _uow.SaveChangesAsync();
                return true;
            }
            return false;
        }

        [HttpDelete("delete-course/{id}")]
        public async Task<bool> DeleteCourse(int courseId)
        {
            return true;
        }

        [HttpPut]
        [Route("update-course")]
        public async Task<IActionResult> UpdateCourse(Course course)
        {
            _uow.CourseRepo.Update(course);
            _uow.SaveChangesAsync();
            return Ok("Course Updated");
        }

        [HttpGet]
        [Route("get-participants-course/{courseId}")]
        public async Task<IActionResult> GetParticipantsCourse(int courseId)
        {
            if(await _uow.CourseRepo.GetByIdAsync(courseId) != null)
            {
                var userList = new Dictionary<string, List<object>>();
                IEnumerable<Participant> participantsList = await _uow.ParticipantRepo.GetAsync(filter: x => x.CourseId == courseId);
                foreach (var participant in participantsList)
                {
                    if(participant.ChildId != null)
                    {
                        Child child = await _uow.ChildRepo.GetByIdAsync((int)participant.ChildId);
                        child.Participant = null; // To Remove Later On
                        child.Parent = null;
                        if (userList.ContainsKey("Child"))
                        {
                            userList["Child"].Add(child);
                        }
                        else
                        {
                            userList["Child"] = new List<object>() { child };
                        }
                    }
                    else
                    {
                        ActiBookingUser actiBookingUser = await _userManager.FindByIdAsync(participant.ActiBookingUserId);
                        actiBookingUser.Participants = null; // To Remove Later On
                        actiBookingUser.Organizations = null;
                        actiBookingUser.Children = null;
                        if (userList.ContainsKey("User"))
                        {
                            userList["User"].Add(actiBookingUser);
                        }
                        else
                        {
                            userList["User"] = new List<object>() { actiBookingUser };
                        }

                    }
                }
                return Ok(userList);

            }
            throw new NotFoundException("Course not found", courseId);
        }
    }
}