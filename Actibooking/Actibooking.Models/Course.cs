using System;
using System.Collections.Generic;
using System.ComponentModel;
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

        public string? DayOfWeek { get; set; }

        public int? Duration { get; set; }

        public int? NumberOfParticipants { get; set; }

        public bool IsArchive { get; set; }
        public int? maxAge { get; set; }
        public int? minAge { get; set; }

        public int? Hour { get; set; }

        public string? Description { get; set; }

        public double? Cost { get; set; }

        public string? ImageUrl { get; set; }

        public List<CourseTag>? CourseTags { get; set; }

        public List<Trainer>? Trainers { get; set; }
        public List<Participant>? Participant { get; set; }
        public Rating? CourseRating { get; set; }
        public int OrganizationId { get; set; }

        public Course()
        {

        }

        public Course(int id, string name, int maxNumberOfParticipants,string date, bool isPublic, string dayOfWeek, int duration, bool isArchive, int minAge,int maxAge,int hour,string description,double cost, string imageUrl, int organizationId   )
        {

            Id = id;
            Name = name;
            MaxNumbersOfParticipants = maxNumberOfParticipants;
            Date= date;
            IsPublic = isPublic;
            DayOfWeek = dayOfWeek;
            Duration = duration;
            IsArchive = isArchive;
            this.minAge = minAge;
            this.maxAge = maxAge;
            Hour = hour;
            Description = description;
            Cost= cost;
            ImageUrl = imageUrl;
            OrganizationId= organizationId;

        }
    }
}
