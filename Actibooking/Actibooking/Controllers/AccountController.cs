using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Models.DTO;
using Actibooking.Services;
using AutoMapper;
using Google.Apis.Auth;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Auth.OAuth2.Flows;
using Google.Apis.Auth.OAuth2.Requests;
using Google.Apis.Auth.OAuth2.Responses;
using Google.Apis.Calendar.v3;
using Google.Apis.Calendar.v3.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace Actibooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController :ControllerBase
    {
        private readonly UserManager<ActiBookingUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IAuthManager _authManager;
        private readonly JwtGenerator _jwtGenerator;
        private readonly IConfiguration _configuration;
        private readonly IConfigurationSection _goolgeSettings;
        private readonly IUnitOfWork _uow;

        public AccountController(UserManager<ActiBookingUser> userManager, 
            IMapper mapper,
            ILogger<AccountController> logger,
            IAuthManager authManager,
            IConfiguration configuration,
            IUnitOfWork uow)
        {
            _userManager = userManager;
            _mapper = mapper;
            _authManager = authManager;
            _configuration = configuration;
            _jwtGenerator = new JwtGenerator("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");
            _goolgeSettings = _configuration.GetSection("GoogleAuthSettings");
            _uow = uow;
        }


        [AllowAnonymous]
        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Register(UserDTO userDTO)
        {
           var user = _mapper.Map<ActiBookingUser>(userDTO);
           user.UserName = userDTO.Email;

           var result = await _userManager.CreateAsync(user, userDTO.Password);
           if (!result.Succeeded)
           {
                foreach( var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                throw new BadRequestException("Email already registred");
           }
           await _userManager.AddToRolesAsync(user,userDTO.Roles);
           return Ok("Account Created");
           
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginUserDTO userDTO)
        {
            if (!await _authManager.ValidateUser(userDTO))
            {
                throw new UnauthorizedExeption(userDTO.Email);
            }
            return Accepted(new { Token = await _authManager.CreateToken() });
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest data)
        {
/*            var payload = _authManager.VerifyGoogleToken(data);*/
            var settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { _goolgeSettings.GetSection("clientId").Value }
            };
            var payload = await GoogleJsonWebSignature.ValidateAsync(data.IdToken, settings);

            if (payload == null)
                return BadRequest("Invalid External Authentication.");
            var info = new UserLoginInfo("GOOGLE", payload.Subject, "GOOGLE");
            var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
            if (user == null)
            {
                user = await _userManager.FindByEmailAsync(payload.Email);
                if (user == null)
                {
                    user = new ActiBookingUser { FirstName = payload.GivenName, LastName = payload.FamilyName, Email = payload.Email, UserName = payload.Email, IsTrainer= false };
                    await _userManager.CreateAsync(user);
                    //prepare and send an email for the email confirmation
                    await _userManager.AddToRoleAsync(user, "User");
                    await _userManager.AddLoginAsync(user, info);
                }
                else
                {
                    await _userManager.AddLoginAsync(user, info);
                }
            }
            if (user == null)
                return BadRequest("Invalid External Authentication.");
            return Accepted(new { Token = await _authManager.CreateToken(user) });
        }
     
        private async Task<bool> CalendarAuthAsync(string userId)
        {
            UserCredential credential = (await GoogleWebAuthorizationBroker.AuthorizeAsync(
   new ClientSecrets { ClientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com", ClientSecret = "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" },
   new string[] { CalendarService.Scope.Calendar }, // Whatever scopes you need here.
   "user",
   default)) as UserCredential;
            // TokenResponse contains the tokens, access token expiry time etc.
            TokenResponse token = credential.Token;
            GoogleAuth googleAuth = new GoogleAuth() { accessToken = token.AccessToken, refreshTokem = token.RefreshToken, ActibookingUserId = userId };
            await _uow.GoogleRepo.InsertAsync(googleAuth);
            await _uow.SaveChangesAsync();
            return true;
        }
        [HttpPost("CreateEvent")]
        public async Task<IActionResult> CreateEvent(GoogleCalendarDTO googleCalendarDTO)
        {
            var userGoogleInfo = await _uow.GoogleRepo.GetAsync(filter: x => x.ActibookingUserId == googleCalendarDTO.ActiBookingUserId);
            var userGoogle = userGoogleInfo.FirstOrDefault();
            if (userGoogle == null)
            {
                await CalendarAuthAsync(googleCalendarDTO.ActiBookingUserId);
                userGoogleInfo = await _uow.GoogleRepo.GetAsync(filter: x => x.ActibookingUserId == googleCalendarDTO.ActiBookingUserId);
                userGoogle = userGoogleInfo.FirstOrDefault();
            }

            string[] scopes = new string[] { CalendarService.Scope.Calendar };
            UserCredential credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                new ClientSecrets
                {
                    ClientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com",
                    ClientSecret = "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"
                },
                scopes,
                userGoogle.refreshTokem,
                CancellationToken.None,
                new FileDataStore("Calendar.Auth.Store")
            ).Result;

            CalendarService calendarService = new CalendarService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = "Actibooking"
            });


            Event newEvent = new Event()
            {
                Summary = googleCalendarDTO.Name,
                Location = "Somewhere",
                Description = googleCalendarDTO.Description,
                Start = new EventDateTime()
                {
                    DateTime = DateTime.ParseExact($"2023-01-10 {googleCalendarDTO.Hour}:00", "yyyy-MM-dd HH:mm", CultureInfo.CurrentCulture),
                    TimeZone = "UTC"
                },
                End = new EventDateTime()
                {
                    DateTime = DateTime.ParseExact($"2023-01-10 {googleCalendarDTO.Hour}:00", "yyyy-MM-dd HH:mm", CultureInfo.CurrentCulture).AddMinutes(googleCalendarDTO.Duration),
                    TimeZone = "UTC"
                },
                Recurrence = new String[] { "RRULE:FREQ=DAILY;COUNT=1" },
                Attendees = new EventAttendee[] { new EventAttendee() { Email = "attendee@example.com" } },
                Reminders = new Event.RemindersData()
                {
                    UseDefault = false,
                    Overrides = new EventReminder[] {
            new EventReminder() { Method = "email", Minutes = 24 * 60 },
            new EventReminder() { Method = "sms", Minutes = 10 },
        }
                }
            };

            string calendarId = "primary";
            EventsResource.InsertRequest request = calendarService.Events.Insert(newEvent, calendarId);
            Event createdEvent = request.Execute();
            return Ok();
        }


        [HttpPost("change-email")]
        public async Task<IActionResult> ChangeEmail(ChangeEmailDTO changeEmailDTO)
        {
            ActiBookingUser user = await _userManager.FindByIdAsync(changeEmailDTO.UserId);
            await _userManager.ChangeEmailAsync(user, changeEmailDTO.Email, changeEmailDTO.Token);
            return Ok("Email Changed");
        }
    }
   
    
}
