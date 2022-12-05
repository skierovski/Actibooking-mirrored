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

        public string? Date { get; set; }

        public bool IsPublic { get; set; }

        public int? DayOfWeek { get; set; }

        public int? Duration { get; set; }

        public bool IsArchive { get; set; }
        public int? maxAge { get; set; }
        public int? minAge { get; set; }

        public string? Hour { get; set; }

        public string? Description { get; set; }

        public int? Cost { get; set; }

        public string? ImageUrl { get; set; }

        public List<CourseTagDTO>? CourseTags { get; set; }

        public List<Trainer>? Trainers { get; set; }
        public List<Participant>? Participant { get; set; }
        public Rating CourseRating { get; set; }
    }
}
