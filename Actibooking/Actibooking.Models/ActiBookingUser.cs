
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Actibooking.Models
{
    public class ActiBookingUser : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string? FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string? LastName { get; set; }

        [Required]
        public bool IsTrainer { get; set; }

        [Required]
        public string? BirthDate { get; set; }

        [Required]
        public string? Gender { get; set; }

        public Trainer? trainer { get; set; }

        public List<Organization>? Organizations { get; set; }
        public List<Child>? Children { get; set; }
        public List<Participant>? Participants { get; set; }

    }
}
