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
    }
}