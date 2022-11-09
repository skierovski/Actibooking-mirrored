using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class Course
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        public int? MaxNumbersOfParticipants { get; set; }

        public int Date { get; set; }

        public int? DayOfWeek { get; set; }

        [Required]
        public int Duration { get; set; }

        public string? Hour { get; set; }
        public List<ABUser>? ABUsers { get; set; }


        [Required]
        public string Descriptions { get; set; }

        [Required]
        public int Cost { get; set; }
        [Required]
        public string ImageUrl { get; set; }

        public List<CourseTag>? CourseTags { get; set; }
        public Organization? Organization { get; set;}
    }
}
