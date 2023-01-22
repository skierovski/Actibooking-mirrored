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
    public class RatingConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder.HasData(new Rating(1, 450, 100, 4.50),
new Rating(2, 453, 100, 4.53),
new Rating(3, 458, 100, 4.58),
new Rating(4, 460, 100, 4.60),
new Rating(5, 463, 100, 4.63),
new Rating(6, 468, 100, 4.68),
new Rating(7, 470, 100, 4.70),
new Rating(8, 473, 100, 4.73),
new Rating(9, 478, 100, 4.78),
new Rating(10, 480, 100, 4.80),
new Rating(11, 483, 100, 4.83),
new Rating(12, 488, 100, 4.88),
new Rating(13, 490, 100, 4.90),
new Rating(14, 493, 100, 4.93),
new Rating(15, 498, 100, 4.98),
new Rating(16, 499, 100, 4.99),
new Rating(17, 450, 100, 4.50),
new Rating(18, 453, 100, 4.53),
new Rating(19, 458, 100, 4.58),
new Rating(20, 460, 100, 4.60),
new Rating(21, 463, 100, 4.63),
new Rating(22, 468, 100, 4.68),
new Rating(23, 470, 100, 4.70),
new Rating(24, 473, 100, 4.73),
new Rating(25, 478, 100, 4.78),
new Rating(26, 480, 100, 4.80),
new Rating(27, 483, 100, 4.83),
new Rating(28, 488, 100, 4.88),
new Rating(29, 490, 100, 4.90),
new Rating(30, 493, 100, 4.93),
new Rating(31, 498, 100, 4.98),
new Rating(32, 499, 100, 4.99),
new Rating(33, 450, 100, 4.50),
new Rating(34, 453, 100, 4.53),
new Rating(35, 458, 100, 4.58),
new Rating(36, 460, 100, 4.60),
new Rating(37, 463, 100, 4.63),
new Rating(38, 468, 100, 4.68),
new Rating(39, 470, 100, 4.70),
new Rating(40, 473, 100, 4.73),
new Rating(41, 478, 100, 4.78),
new Rating(42, 480, 100, 4.80),
new Rating(43, 483, 100, 4.83),
new Rating(44, 488, 100, 4.88),
new Rating(45, 490, 100, 4.90)
                );
        }
    }
}
