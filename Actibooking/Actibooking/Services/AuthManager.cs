using Actibooking.Data.Repository;
using Actibooking.Models;
using Actibooking.Models.DTO;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Actibooking.Services
{
    public class AuthManager : IAuthManager
    {
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly IConfiguration _configuration;
        private ActiBookingUser _user;
        readonly RsaSecurityKey _key;
        private readonly IConfigurationSection _goolgeSettings;
        private readonly IUnitOfWork _uow;

        public AuthManager(UserManager<ActiBookingUser> userManager, IConfiguration configuration, IUnitOfWork uow)
        {
            _userManager = userManager;
            _configuration = configuration;
            _goolgeSettings = _configuration.GetSection("GoogleAuthSettings");
            _uow = uow;
        }

        public async Task<string> CreateToken()
        {

            var securityKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable(
                    "KEY", EnvironmentVariableTarget.Machine)));

            var credentials = new SigningCredentials(securityKey,SecurityAlgorithms.HmacSha256);

            var roles = await _userManager.GetRolesAsync(_user);
            var roleClaims = roles.Select(x => new Claim(ClaimTypes.Role, x));
            var UserClaims = await _userManager.GetClaimsAsync(_user);
            _user.Addresses = await _uow.AdressRepo.GetByIdAsync(_user.AddressesId);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, _user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, _user.Email),
                new Claim("City", _user.Addresses.City),
                new Claim("uid",_user.Id),
            }.Union(UserClaims).Union(roleClaims);

            var token = new JwtSecurityToken(
                issuer: _configuration["JwT:Issuer"],
                audience: _configuration["JwT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToInt32(_configuration["JwT:lifetime"])),
                signingCredentials:credentials
                );
            return new JwtSecurityTokenHandler().WriteToken(token);

        }

        public async Task<string> CreateToken(ActiBookingUser _user)
        {

            var securityKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable(
                    "KEY", EnvironmentVariableTarget.Machine)));

            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var roles = await _userManager.GetRolesAsync(_user);
            var roleClaims = roles.Select(x => new Claim(ClaimTypes.Role, x));
            var UserClaims = await _userManager.GetClaimsAsync(_user);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, _user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, _user.Email),
                new Claim("uid",_user.Id),
            }.Union(UserClaims).Union(roleClaims);

            var token = new JwtSecurityToken(
                issuer: _configuration["JwT:Issuer"],
                audience: _configuration["JwT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToInt32(_configuration["JwT:lifetime"])),
                signingCredentials: credentials
                );
            return new JwtSecurityTokenHandler().WriteToken(token);

        }
        /*
                public async Task<string> CreateToken2()
                {
        *//*            var signingCredentials = GetSigningCredentials();
                    var claims = await GetClaims();*//*
                    var token = GenerateTokenOptions(signingCredentials,claims);
                    return new JwtSecurityTokenHandler().WriteToken(token);
                }*/

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var experation = DateTime.Now.AddMinutes(Convert.ToDouble( jwtSettings.GetSection("lifetime").Value));
            var token = new JwtSecurityToken(
                issuer: jwtSettings.GetSection("Issuer").Value,
                claims: claims,
                expires: experation,
                signingCredentials: signingCredentials
                );
            return token;
        }

/*        private async Task<List<Claim>> GetClaims()
        {
            var roles = await _userManager.GetRolesAsync(_user);
            var roleClaims = roles.Select(x => new Claim(ClaimTypes.Role, x));
            var UserClaims = await _userManager.GetClaimsAsync(_user);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, _user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Email, _user.Email),
                new Claim("uid",_user.Id),
            }.Union(UserClaims).Union(roleClaims);

            return claims;
        }*/

        private SigningCredentials GetSigningCredentials()
        {
            /* var key = _configuration.GetSection("KEY").Value;*/
            var key = Environment.GetEnvironmentVariable("KEY", EnvironmentVariableTarget.Machine);
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            return new SigningCredentials(secret,SecurityAlgorithms.HmacSha256);
        }

        public async Task<bool> ValidateUser(LoginUserDTO userDTO)
        {
            _user = await _userManager.FindByNameAsync(userDTO.Email);
            return (_user != null && await _userManager.CheckPasswordAsync(_user,userDTO.Password));

        }

        public string CreateUserAuthToken(string userId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Audience = "myApi",
                Issuer = "AuthService",
                Subject = new ClaimsIdentity(new Claim[]
                {
                            new Claim(ClaimTypes.Sid, userId.ToString())
                }),
                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = new SigningCredentials(_key, SecurityAlgorithms.RsaSha256)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public async Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(AuthenticateRequest data)
        {
            try
            {
                var settings = new GoogleJsonWebSignature.ValidationSettings()
                {
                    Audience = new List<string>() { _goolgeSettings.GetSection("clientId").Value }
                };
                var payload = await GoogleJsonWebSignature.ValidateAsync(data.IdToken, settings);
                return payload;
            }
            catch (Exception ex)
            {
                //log an exception
                return null;
            }
        }
    }
}
