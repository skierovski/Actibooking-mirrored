using System.ComponentModel.DataAnnotations;

namespace Actibooking.Models
{
    public class Child
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }

        public string? ActiBookingUserId { get; set; }
    }
}