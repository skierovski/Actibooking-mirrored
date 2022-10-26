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

        public DateOnly Date { get; set; }

        public DayOfWeek? DayOfWeek { get; set; }

        [Required]
        public int Duration { get; set; }

        public string? Hour { get; set; }


        [Required]
        public string Descriptions { get; set; }

        [Required]
        public int Cost { get; set; }
        [Required]
        public Uri ImageUrl { get; set; }
    }
}
