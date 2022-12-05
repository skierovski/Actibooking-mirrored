using Actibooking.Controllers;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Moq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Test
{
    public class AccountControllerTest
    {
/*        [Fact]
        public async void TryValidateNewUser()
        {

            var userMenagerMock = new Mock<UserManager<ActiBookingUser>>();
            var iMapperMock = new Mock<IMapper>();
            var iLoggerAccountControllerMock = new Mock<ILogger<AccountController>>();
            var iAuthManagerMock = new Mock<IAuthManager>();
            var accountController = new AccountController(userMenagerMock.Object, iMapperMock.Object, iLoggerAccountControllerMock.Object, iAuthManagerMock.Object);

            var newUserDTO = new UserDTO();
            newUserDTO.Email = "ar12@actibooking.pl";
            newUserDTO.Password = "P@ssword123";
            newUserDTO.FirstName = "Adrian";
            newUserDTO.LastName = "Testowe";
            newUserDTO.Roles.Add("User");

            var newUser = await accountController.Register(newUserDTO);
            Assert.IsType<OkObjectResult>(newUser);
        }*/


    }
}
