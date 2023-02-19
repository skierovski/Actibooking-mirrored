using Actibooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Services
{
    public interface ICoursesManager
    {
        Task<IEnumerable<Course>> GetAll();
        Task<Course> GetCourse(int id);
        Task<bool> CreateCourse([FromBody] CourseDTO courseDTO, int organizationId);
        Task<bool> DeleteCourse(int courseId);
        Task<bool> UpdateCourse([FromQuery]CourseDTO courseDTO);
        Task<Dictionary<string, List<object>>> GetParticipantsCourse(int courseId);
        Task<List<Course>> GetOrganizationCourses(int orgId);
        Task<List<Course>> SearchPhrase(string phrase);
    }
}
