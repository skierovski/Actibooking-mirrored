using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class Trainer
    {
        [Key]
        public int Id { get; set; }

        public string? Description { get; set; }

        public string? Education { get; set; }

        public string? PhotoUrl { get; set; }
        public string ActiBookingUserId { get; set; }
        public ActiBookingUser ActiBookingUser { get; set; }
        public int? OrganizationId { get; set; }
        public Rating TrainerRating { get; set; }

        public Trainer()
        {
            TrainerRating = new Rating();
        }
    }
}
