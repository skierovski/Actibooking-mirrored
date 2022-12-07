using Actibooking.Models;

namespace Actibooking.Services
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(LoginUserDTO userDTO);
        Task<string> CreateToken();
        public string CreateUserAuthToken(string email);
    }
}
