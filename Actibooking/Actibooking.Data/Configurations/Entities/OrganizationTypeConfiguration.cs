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
    public class OrganizationTypeConfiguration : IEntityTypeConfiguration<OrganizationType>
    {
        public void Configure(EntityTypeBuilder<OrganizationType> builder)
        {
            builder.HasData(
                    new OrganizationType
                    {
                        Id = 1,
                        Name = "Football school",
                        Description = "Football school"
                    },
                    new OrganizationType
                    {
                        Id = 2,
                        Name = "Swimming school",
                        Description = "Swimming school"
                    },
                    new OrganizationType
                    {
                        Id = 3,
                        Name = "Personal training",
                        Description = "Personal training"
                    },
                    new OrganizationType
                    {
                        Id = 4,
                        Name = "Aerobics",
                        Description = "Aerobics"
                    },
                    new OrganizationType
                    {
                        Id = 5,
                        Name = "Rehabilitation",
                        Description = "Rehabilitation"
                    }
                );
        }
    }
}
