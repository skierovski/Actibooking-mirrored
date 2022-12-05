using Actibooking.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Configurations.Entities
{
    public class CourseTagConfiguration : IEntityTypeConfiguration<CourseTagDTO>
    {
        public void Configure(EntityTypeBuilder<CourseTagDTO> builder)
        {
            builder.HasData(
                    new CourseTagDTO
                    {
                        Id = 1,
                        Name = "Kid",
                        Description = "Course for Kids"
                    },
                     new CourseTagDTO
                     {
                         Id = 2,
                         Name = "Adult",
                         Description = "Course for Adults"
                     },
                      new CourseTagDTO
                      {
                          Id = 3,
                          Name = "Beginner",
                          Description = "Course for Beginners"
                      },
                      new CourseTagDTO
                      {
                          Id = 4,
                          Name = "Intermediate",
                          Description = "Course for Intermediates"
                      },
                      new CourseTagDTO
                      {
                          Id = 5,
                          Name = "Advanced",
                          Description = "Course for Advanced"
                      }
                );
        }
    }
}
