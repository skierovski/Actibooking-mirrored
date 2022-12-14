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
    public class ChildConfiguration : IEntityTypeConfiguration<Child>
    {
        public void Configure(EntityTypeBuilder<Child> builder)
        {
            builder.HasData(new Child(1, "Oliwia", "Kowalska", "12-5-2009", "12c3dca5-04c9-4233-b1e2-ea517bc1fd0c"),
new Child(2, "Jan", "Kowalski", "2-9-2011", "12c3dca5-04c9-4233-b1e2-ea517bc1fd0c"),
new Child(3, "Zuzanna", "Kowalczyk", "29-1-2008", "1a5f99ca-6d76-4f88-8690-0fb67a6b65e2"),
new Child(4, "Antoni", "Kowalczyk", "5-4-2010", "1a5f99ca-6d76-4f88-8690-0fb67a6b65e2"),
new Child(5, "Lena", "Dąbrowska", "3-11-2007", "278a036a-7957-42a2-a931-d81176865990"),
new Child(6, "Kacper", "Dąbrowski", "26-6-2006", "278a036a-7957-42a2-a931-d81176865990"),
new Child(7, "Maja", "Pawłowska", "9-8-2012", "493ad475-7c9e-4fd2-ac1c-f1bb90c4be1b"),
new Child(8, "Adam", "Pawłowski", "1-12-2013", "493ad475-7c9e-4fd2-ac1c-f1bb90c4be1b"),
new Child(9, "Natalia", "Nowakowska", "7-2-2018", "5d1179e9-c591-4a94-b6a0-0eb1df7e7493"),
new Child(10, "Marcel", "Nowakowski", "22-7-2017", "5d1179e9-c591-4a94-b6a0-0eb1df7e7493"),
new Child(11, "Amelia", "Majewska", "12-10-2016", "69ff46c6-a99e-4759-9234-5a0e6785efb4"),
new Child(12, "Wojciech", "Majewski", "2-3-2015", "69ff46c6-a99e-4759-9234-5a0e6785efb4"),
new Child(13, "Julia", "Kozłowska", "29-5-2014", "6c767d62-934e-4ae5-87e8-4979ead7ea2c"),
new Child(14, "Franek", "Kozłowski", "5-9-2013", "6c767d62-934e-4ae5-87e8-4979ead7ea2c"),
new Child(15, "Laura", "Jabłońska", "3-1-2012", "70b042f8-bda5-40d5-9fe7-6a2a69a3e5c0"),
new Child(16, "Mikołaj", "Jabłoński", "26-4-2006", "70b042f8-bda5-40d5-9fe7-6a2a69a3e5c0"),
new Child(17, "Zofia", "Kwiatkowska", "9-11-2007", "842f6f6f-77e5-466f-be9e-867c23317ec8"),
new Child(18, "Nikodem", "Kwiatkowski", "1-6-2008", "842f6f6f-77e5-466f-be9e-867c23317ec8"),
new Child(19, "Marysia", "Szewczyk", "7-8-2009", "96670e83-96b2-4794-890f-8ec696031e5a"),
new Child(20, "Ignacy", "Szewczyk", "22-12-2010", "96670e83-96b2-4794-890f-8ec696031e5a")
                );
        }
    }
}
