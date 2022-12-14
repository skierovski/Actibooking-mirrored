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
    public class ActibookingUsersConfiguration : IEntityTypeConfiguration<ActiBookingUser>
    {
        public void Configure(EntityTypeBuilder<ActiBookingUser> builder)
        {
            builder.HasData(new ActiBookingUser("08d6426c-ba9f-4933-bff0-dd70875835ef", "Adam", "Nowak", "Adam.Nowak@actibooking.pl", "Adam.Nowak@actibooking.pl", "6-4-1987", "male", 1),
new ActiBookingUser("12c3dca5-04c9-4233-b1e2-ea517bc1fd0c", "Anna", "Kowalska", "Anna.Kowalska@actibooking.pl", "Anna.Kowalska@actibooking.pl", "28-11-1998", "female", 48),
new ActiBookingUser("1778ff92-a961-4a38-9532-7a80866e4d55", "Maria", "Wiśniewska", "Maria.Wiśniewska@actibooking.pl", "Maria.Wiśniewska@actibooking.pl", "27-6-1993", "female", 97),
new ActiBookingUser("1a23f589-ca4f-44ef-bf99-d43b6d7d10be", "Jan", "Wójcik", "Jan.Wójcik@actibooking.pl", "Jan.Wójcik@actibooking.pl", "24-8-1979", "male", 44),
new ActiBookingUser("1a5f99ca-6d76-4f88-8690-0fb67a6b65e2", "Tomasz", "Kowalczyk", "Tomasz.Kowalczyk@actibooking.pl", "Tomasz.Kowalczyk@actibooking.pl", "8-12-1984", "male", 75),
new ActiBookingUser("2167eabd-a30e-4844-ba8e-11f76e91a5ae", "Karol", "Kamiński", "Karol.Kamiński@actibooking.pl", "Karol.Kamiński@actibooking.pl", "14-2-1966", "male", 102),
new ActiBookingUser("2668a0d8-fac5-4b34-bb78-248d08532ce9", "Kinga", "Lewandowska", "Kinga.Lewandowska@actibooking.pl", "Kinga.Lewandowska@actibooking.pl", "10-7-2002", "female", 109),
new ActiBookingUser("278a036a-7957-42a2-a931-d81176865990", "Aleksandra", "Dąbrowska", "Aleksandra.Dąbrowska@actibooking.pl", "Aleksandra.Dąbrowska@actibooking.pl", "4-10-1991", "female", 15),
new ActiBookingUser("2a38289f-349b-4c50-8f2c-51b6660c7f3b", "Bartosz", "Zieliński", "Bartosz.Zieliński@actibooking.pl", "Bartosz.Zieliński@actibooking.pl", "16-3-1978", "male", 82),
new ActiBookingUser("3363cae8-e809-469d-9ae5-36edb57a06d1", "Izabela", "Szymańska", "Izabela.Szymańska@actibooking.pl", "Izabela.Szymańska@actibooking.pl", "11-5-1964", "female", 63),
new ActiBookingUser("342c3041-b831-4db1-8ed5-2374b4383f84", "Kacper", "Kościelniak", "Kacper.Kościelniak@actibooking.pl", "Kacper.Kościelniak@actibooking.pl", "15-9-1968", "male", 136),
new ActiBookingUser("3a272fc0-3fa0-434c-b68d-e83baff5a68f", "Maja", "Woźniak", "Maja.Woźniak@actibooking.pl", "Maja.Woźniak@actibooking.pl", "13-1-2001", "female", 28),
new ActiBookingUser("3d7a2ca7-3b02-4065-8dbf-78c882043d8d", "Zuzanna", "Jankowska", "Zuzanna.Jankowska@actibooking.pl", "Zuzanna.Jankowska@actibooking.pl", "30-4-1960", "female", 133),
new ActiBookingUser("493ad475-7c9e-4fd2-ac1c-f1bb90c4be1b", "Szymon", "Pawłowski", "Szymon.Pawłowski@actibooking.pl", "Szymon.Pawłowski@actibooking.pl", "20-11-1988", "male", 19),
new ActiBookingUser("5162a7fa-ff4b-4d92-98c8-e54a983b95cb", "Weronika", "Kaczmarek", "Weronika.Kaczmarek@actibooking.pl", "Weronika.Kaczmarek@actibooking.pl", "18-6-1972", "female", 71),
new ActiBookingUser("59171af6-b50b-44a8-8643-f8bed69c1690", "Damian", "Michalski", "Damian.Michalski@actibooking.pl", "Damian.Michalski@actibooking.pl", "25-8-1976", "male", 111),
new ActiBookingUser("5d1179e9-c591-4a94-b6a0-0eb1df7e7493", "Oliwia", "Nowakowska", "Oliwia.Nowakowska@actibooking.pl", "Oliwia.Nowakowska@actibooking.pl", "17-12-1983", "female", 31),
new ActiBookingUser("60ddb236-7f2a-4f16-84f9-919b72c95768", "Piotr", "Krawczyk", "Piotr.Krawczyk@actibooking.pl", "Piotr.Krawczyk@actibooking.pl", "19-2-1995", "male", 105),
new ActiBookingUser("6122bc9c-db0c-42f3-a0aa-4430690344a0", "Natalia", "Kucharska", "Natalia.Kucharska@actibooking.pl", "Natalia.Kucharska@actibooking.pl", "23-7-1965", "female", 14),
new ActiBookingUser("6973ec61-e11d-4171-af23-9b8907630280", "Jakub", "Adamski", "Jakub.Adamski@actibooking.pl", "Jakub.Adamski@actibooking.pl", "21-10-1969", "male", 25),
new ActiBookingUser("69ff46c6-a99e-4759-9234-5a0e6785efb4", "Wiktoria", "Majewska", "Wiktoria.Majewska@actibooking.pl", "Wiktoria.Majewska@actibooking.pl", "22-3-1989", "female", 107),
new ActiBookingUser("6be48cf5-4b7b-431c-9ede-148b5cd19fb7", "Patrycja", "Wróbel", "Patrycja.Wróbel@actibooking.pl", "Patrycja.Wróbel@actibooking.pl", "12-5-1974", "female", 108),
new ActiBookingUser("6c767d62-934e-4ae5-87e8-4979ead7ea2c", "Kuba", "Kozłowski", "Kuba.Kozłowski@actibooking.pl", "Kuba.Kozłowski@actibooking.pl", "2-9-1985", "male", 23),
new ActiBookingUser("6ecd0431-7690-42b9-9ac6-85a2fcd08152", "Aleksander", "Wieczorek", "Aleksander.Wieczorek@actibooking.pl", "Aleksander.Wieczorek@actibooking.pl", "29-1-1963", "male", 11),
new ActiBookingUser("70a8acf4-d688-4c6e-a545-a295c073fae0", "Martyna", "Mazur", "Martyna.Mazur@actibooking.pl", "Martyna.Mazur@actibooking.pl", "5-4-1996", "female", 61),
new ActiBookingUser("70b042f8-bda5-40d5-9fe7-6a2a69a3e5c0", "Kaja", "Jabłońska", "Kaja.Jabłońska@actibooking.pl", "Kaja.Jabłońska@actibooking.pl", "3-11-1982", "female", 51),
new ActiBookingUser("7497e83a-f729-4296-82f3-222758286730", "Adrian", "Król", "Adrian.Król@actibooking.pl", "Adrian.Król@actibooking.pl", "26-6-1971", "male", 81),
new ActiBookingUser("74fee782-a90b-4d7f-b229-380dbd65117f", "Magdalena", "Wolna", "Magdalena.Wolna@actibooking.pl", "Magdalena.Wolna@actibooking.pl", "9-8-1999", "female", 59),
new ActiBookingUser("7a4a4199-5159-42d1-9c02-d70b741d7f07", "Igor", "Zając", "Igor.Zając@actibooking.pl", "Igor.Zając@actibooking.pl", "1-12-1970", "male", 73),
new ActiBookingUser("7a642938-fd22-4b65-935f-5c616ab88666", "Julia", "Górska", "Julia.Górska@actibooking.pl", "Julia.Górska@actibooking.pl", "7-2-1973", "female", 132),
new ActiBookingUser("7dff1713-4e6d-4ef3-b992-606e7de605ef", "Miłosz", "Wróblewski", "Miłosz.Wróblewski@actibooking.pl", "Miłosz.Wróblewski@actibooking.pl", "22-7-1980", "male", 121),
new ActiBookingUser("842f6f6f-77e5-466f-be9e-867c23317ec8", "Paulina", "Kwiatkowska", "Paulina.Kwiatkowska@actibooking.pl", "Paulina.Kwiatkowska@actibooking.pl", "12-10-1981", "female", 100),
new ActiBookingUser("8a7236c7-2aba-4a45-a0ea-76cfd64c362e", "Maciej", "Kopeć", "Maciej.Kopeć@actibooking.pl", "Maciej.Kopeć@actibooking.pl", "2-3-1994", "male", 40),
new ActiBookingUser("8d00408d-dd7d-4653-95de-6d557d15cba2", "Lena", "Jaworska", "Lena.Jaworska@actibooking.pl", "Lena.Jaworska@actibooking.pl", "29-5-1967", "female", 26),
new ActiBookingUser("8f45952d-18dd-4104-be74-3a64bedd7732", "Filip", "Niedźwiecki", "Filip.Niedźwiecki@actibooking.pl", "Filip.Niedźwiecki@actibooking.pl", "5-9-1992", "male", 87),
new ActiBookingUser("96670e83-96b2-4794-890f-8ec696031e5a", "Zofia", "Szewczyk", "Zofia.Szewczyk@actibooking.pl", "Zofia.Szewczyk@actibooking.pl", "3-1-1986", "female", 118),
new ActiBookingUser("99f936ad-f124-475f-a905-37dfa7af2dd7", "Bartłomiej", "Sadowski", "Bartłomiej.Sadowski@actibooking.pl", "Bartłomiej.Sadowski@actibooking.pl", "26-4-1962", "male", 64),
new ActiBookingUser("a3a5f26a-478d-4cec-b232-4c4fbb4f2fc9", "Marta", "Czarnecka", "Marta.Czarnecka@actibooking.pl", "Marta.Czarnecka@actibooking.pl", "9-11-1997", "female", 124),
new ActiBookingUser("a738ce28-e5ad-464b-af44-310fd1690298", "Mikołaj", "Pietrzak", "Mikołaj.Pietrzak@actibooking.pl", "Mikołaj.Pietrzak@actibooking.pl", "1-6-1990", "male", 34),
new ActiBookingUser("b3e61492-c8a0-4dd3-8603-e6dd8a03ab23", "Amelia", "Tomaszewska", "Amelia.Tomaszewska@actibooking.pl", "Amelia.Tomaszewska@actibooking.pl", "7-8-2000", "female", 91),
new ActiBookingUser("bfbc9756-e531-4f43-b28c-95def4eee14f", "Tadeusz", "Bąk", "Tadeusz.Bąk@actibooking.pl", "Tadeusz.Bąk@actibooking.pl", "22-12-1977", "male", 115),
new ActiBookingUser("c1299e92-aaa9-4075-98c4-7147edba4982", "Nadia", "Piotrowska", "Nadia.Piotrowska@actibooking.pl", "Nadia.Piotrowska@actibooking.pl", "12-2-1975", "female", 38),
new ActiBookingUser("d20cb05b-a51a-4fce-a0de-deb5a9ece8d3", "Olga", "Markowska", "Olga.Markowska@actibooking.pl", "Olga.Markowska@actibooking.pl", "2-7-1961", "female", 69),
new ActiBookingUser("d7a85f80-e0b9-4d86-8c0a-09c6d6ffa512", "Konrad", "Zalewski", "Konrad.Zalewski@actibooking.pl", "Konrad.Zalewski@actibooking.pl", "29-10-1989", "male", 93),
new ActiBookingUser("e244c2ab-b2b4-416f-9f07-15c522004141", "Ewa", "Baran", "Ewa.Baran@actibooking.pl", "Ewa.Baran@actibooking.pl", "5-3-1994", "female", 130),
new ActiBookingUser("ec0437d5-653c-47c5-91a3-af138f3bf41a", "Sławomir", "Chmielewski", "Sławomir.Chmielewski@actibooking.pl", "Sławomir.Chmielewski@actibooking.pl", "3-5-1967", "male", 55),
new ActiBookingUser("f0973431-1adf-423d-983a-9483c2a83da0", "Laura", "Szczepańska", "Laura.Szczepańska@actibooking.pl", "Laura.Szczepańska@actibooking.pl", "26-9-1992", "female", 94),
new ActiBookingUser("f09d3fff-bd88-48db-85f4-268ceb850a2a", "Grzegorz", "Wojciechowski", "Grzegorz.Wojciechowski@actibooking.pl", "Grzegorz.Wojciechowski@actibooking.pl", "9-1-1986", "male", 119),
new ActiBookingUser("f7565c67-17e5-4ee7-8ba4-1680019cbb8f", "Emilia", "Adamczyk", "Emilia.Adamczyk@actibooking.pl", "Emilia.Adamczyk@actibooking.pl", "1-4-1962", "female", 110),
new ActiBookingUser("fef73609-37f0-42f9-9517-c182fd53af85", "Stanisław", "Stępień", "Stanisław.Stępień@actibooking.pl", "Stanisław.Stępień@actibooking.pl", "7-11-1997", "male", 37)
                );
        }
    }
}
