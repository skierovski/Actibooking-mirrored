using Actibooking.Controllers;
using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;

namespace ActibookingTests
{
    public class Tests
    {
        private readonly UserManager<ActiBookingUser> userManager;
        private readonly IMapper mapper;
        private readonly IUnitOfWork uow;

        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            // Arrange
            var controller = new UserController(mapper, uow, userManager);
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();

            // Act
            var response = controller.

            // Assert
            Product product;
            Assert.IsTrue(response.TryGetContentValue<Product>(out product));
            Assert.AreEqual(10, product.Id);
        }
    }
}