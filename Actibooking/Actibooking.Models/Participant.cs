using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class Participant
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }

        public string? ActiBookingUserId { get; set; }
        public ActiBookingUser? ActiBookingUser { get; set; }
        public int? ChildId { get; set; }
        public Child? Child { get; set; }
    }
}
