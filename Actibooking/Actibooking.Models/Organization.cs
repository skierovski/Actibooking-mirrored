using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class Organization
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public List<Course>? Courses { get; set; }

        public List<Adress>? Adresses { get; set; }

        public List<OrganizationType>? OrganizationTypes { get; set; }
        public ABUser? ABUser { get; set; }
    }
}
