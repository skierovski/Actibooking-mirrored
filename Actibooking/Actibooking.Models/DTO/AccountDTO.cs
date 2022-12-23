using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Models.DTO
{
    public class AccountDTO
    {

    }

    public class ChangeEmailDTO
    {
        public string Email { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}
