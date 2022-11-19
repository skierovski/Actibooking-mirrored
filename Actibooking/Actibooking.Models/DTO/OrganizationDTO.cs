using Actibooking.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class OrganizationDTO
    {
        public string Name { get; set; }

        public bool IsPublic { get; set; }

        public string? Description { get; set; }

        public string? LogoUrl { get; set; }

        public string? PhotosUrl { get; set; }
    }

    public class NewOrganizationDTO : OrganizationDTO
    {
        public string ActiBookingUserId { get; set; }
    }

    public class UpdateOrganizationDTO : OrganizationDTO
    {
        public int Id { get; set; }
    }
}
