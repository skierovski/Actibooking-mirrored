using System.ComponentModel.DataAnnotations;

namespace Actibooking.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Country { get; set; }
        [Required]
        [StringLength(50)]
        public string City { get; set; }
        [Required]
        [StringLength(10)]
        public string Zipcode { get; set; }
        [Required]
        [StringLength(50)]
        public string Street { get; set; }
        [Required]
        [StringLength(10)]
        public string StreetNumber { get; set; }
        [StringLength(10)]
        public string? FlatNumber { get; set; }
/*        public string ActiBookingUserId { get; set; }
        public ActiBookingUser? ActiBookingUser { get; set; }*/
        public Address()
        {

        }

        public Address(int id, string country, string zipcode, string city, string street, string streetNumber, string? flatNumber)
        {
            Id = id;
            Country = country;
            City = city;
            Zipcode = zipcode;
            Street = street;
            StreetNumber = streetNumber;
            FlatNumber = flatNumber;
        }
    }
}