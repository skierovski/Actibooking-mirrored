
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Actibooking.Models
{
    public class ActiBookingUser : IdentityUser
    {
        [Required]
        [MaxLength(100)]
        public string? FirstName { get; set; }
        [Required]
        [MaxLength(100)]
        public string? LastName { get; set; }

        public bool IsTrainer { get; set; }

        public string? BirthDate { get; set; }
        public string? Gender { get; set; }

        public Trainer? Trainer { get; set; }
        public int AddressesId { get; set; }
        public Address? Addresses { get; set; }
        public List<Organization>? Organizations { get; set; }
        public List<Child>? Children { get; set; }
        public List<Participant>? Participants { get; set; }

        public ActiBookingUser()
        {

        }

        public ActiBookingUser(string id,string firstName, string lastName, string email, string userName, string birthDate, string gender, int addresID)
        {
            Id = id;
            FirstName = firstName;  
            LastName = lastName;
            Email = email;
            NormalizedEmail = email.ToUpper();
            PasswordHash = "AQAAAAEAACcQAAAAEDatWhPxB7KNndYvHFEZAo + IqUoBEmk7muJR2fySPYXhrOONBC91C / kWunlV / OcqzQ ==";
            UserName = userName;
            NormalizedUserName= userName.ToUpper();
            BirthDate = birthDate;
            Gender = gender;
            IsTrainer = false;
            AddressesId = addresID;
        }

    }
}
