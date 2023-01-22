using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models
{
    public class GoogleAuth
    {
        public int Id { get; set; }
        public string? accessToken { get; set; }
        public string? refreshTokem { get; set; }
        public ActiBookingUser? ActibookingUser { get; set; }
        public string? ActibookingUserId { get; set; }
    }
}
