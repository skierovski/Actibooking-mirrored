using System.ComponentModel.DataAnnotations;

namespace Actibooking.Models
{
    public class Child
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string BirthDate { get; set; }
        public string? ActiBookingUserId { get; set; }
        public List<Participant>? Participant { get; set; }

        public Child()
        {

        }

        public Child(int id, string name,string lastName, string birthDate,string actiBookingUserId)
        {
            Id = id;
            Name = name;
            LastName = lastName;
            BirthDate = birthDate;
            ActiBookingUserId = actiBookingUserId;
        }
    }
}