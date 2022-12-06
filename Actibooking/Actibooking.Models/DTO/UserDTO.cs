using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class LoginUserDTO
    {

        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class UserDTO : LoginUserDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string BirthDate { get; set; }
        public string Gender { get; set; }
        public ICollection<string> Roles { get; set; }
    }

    public class AddingChildDTO 
    {
        public string ActiBookingUserId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string BirthDate { get; set; }
    }

    public class AddingUserToCourseDTO
    {
        public int CourseId { get; set; }
        public string ActiBookingUserId { get; set; }
    }
    public class AddingChildToCourseDTO 
    {
        public string ActiBookingUserId { get; set; }
        public int CourseId { get; set; }
        public int ChildId { get; set; }
    }
    public class GetCourseParticipantsUserDTO
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public bool IsTrainer { get; set; }
        public string? BirthDate { get; set; }
        public string? Gender { get; set; }
    }
}
