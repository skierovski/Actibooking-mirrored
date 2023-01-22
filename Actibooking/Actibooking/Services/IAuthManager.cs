using Actibooking.Models;
using Actibooking.Models.DTO;
using Google.Apis.Auth;

namespace Actibooking.Services
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(LoginUserDTO userDTO);
        Task<string> CreateToken();
        Task<string> CreateToken(ActiBookingUser _user);
        public string CreateUserAuthToken(string email);

        public Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(AuthenticateRequest data);
    }
}
