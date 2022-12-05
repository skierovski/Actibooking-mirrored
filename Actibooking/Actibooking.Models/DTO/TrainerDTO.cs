using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models.DTO
{
    public class TrainerDTO
    {
    }

    public class NewTrainerDTO 
    {
        public string ActiBookingUserId { get; set; }
        public string? Description { get; set; }

        public string? Education { get; set; }

        public string? PhotoUrl { get; set; }
    }

    public class UpdateTrainerDTO
    {
        public int Id { get; set; }
        public int OrganizationId { get; set; }
        public string? Description { get; set; }

        public string? Education { get; set; }

        public string? PhotoUrl { get; set; }
    }

}
