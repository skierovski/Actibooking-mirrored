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
    public class CourseTagConfiguration : IEntityTypeConfiguration<CourseTag>
    {
        public void Configure(EntityTypeBuilder<CourseTag> builder)
        {
            builder.HasData(
                    new CourseTag
                    {
                        Id = 1,
                        Name = "Kid",
                        Description = "Course for Kids"
                    },
                     new CourseTag
                     {
                         Id = 2,
                         Name = "Adult",
                         Description = "Course for Adults"
                     },
                      new CourseTag
                      {
                          Id = 3,
                          Name = "Beginner",
                          Description = "Course for Beginners"
                      },
                      new CourseTag
                      {
                          Id = 4,
                          Name = "Intermediate",
                          Description = "Course for Intermediates"
                      },
                      new CourseTag
                      {
                          Id = 5,
                          Name = "Advanced",
                          Description = "Course for Advanced"
                      }
                );
        }
    }
}
