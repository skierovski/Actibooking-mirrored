using Actibooking.Data.Repository;
using Actibooking;
using Actibooking.Services;
using FakeItEasy;
using Actibooking.Models;
using Actibooking.Controllers;
using FluentAssertions;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace Actibooking.Tests.Controller
{
    public class OrganizationsControllerTests
    {
        private IUnitOfWork _uow;
        private readonly IOrganizationManager _organizationManager;

        public OrganizationsControllerTests()
        {
            _uow = A.Fake<IUnitOfWork>();
            _organizationManager = A.Fake<IOrganizationManager>();
        }

        [Fact]
        public void OrganizationsController_GetAll_ReturnOk()
        {
            //Arange
            var organizations = A.Fake<IEnumerable<Organization>>();
            A.CallTo(() => _organizationManager.CheckIfEmpty()).Returns(organizations);
            var controller = new OrganizationsController(_uow, _organizationManager);

            //Act
            var result = controller.GetAll();

            //Assert

            result.Result.Should().BeOfType(typeof(OkObjectResult));
        }

        [Fact]
        public void OrganizationsController_GetOrganization_ReturnOk()
        {
            //Arange
            var organization = A.Fake<Organization>();
            A.CallTo(() => _organizationManager.FindOrganzation(organization.Id)).Returns(organization);
            var controller = new OrganizationsController(_uow, _organizationManager);
            //Act
            var result = controller.GetOrganization(organization.Id);

            //Assert
            result.Result.Should().BeOfType(typeof(OkObjectResult));

        }

        [Fact]
        public void OrganizationsController_CreateOrganization_ReturnOk()
        {
            //Arange
            var organizationDTO = A.Fake<NewOrganizationDTO>();
            A.CallTo(() => _organizationManager.MapOrganization(organizationDTO)).Returns(true);
            var controller = new OrganizationsController(_uow, _organizationManager);
            //Act
            var result = controller.CreateOrganization(organizationDTO);

            //Assert
            result.Result.Should().BeOfType(typeof(OkObjectResult));
        }

        [Fact]
        public void OrganizationsController_DeleteOrganization_ReturnOk()
        {
            //Arange
            var organization = A.Fake<Organization>();
            A.CallTo(() => _uow.OrganizationRepo.DeleteAsync(organization.Id)).DoesNothing();
            var controller = new OrganizationsController(_uow, _organizationManager);
            //Act
            var result = controller.DeleteOrganization(organization.Id);

            //Assert
            result.Result.Should().BeOfType(typeof(OkObjectResult));
        }

        [Fact]
        public void OrganizationsController_UpdateOrganization_ReturnOk()
        {
            //Arange
            var updateOrganizationDTO = A.Fake<UpdateOrganizationDTO>();
            A.CallTo(() => _organizationManager.ConvertOrganization(updateOrganizationDTO)).DoesNothing();  
            var controller = new OrganizationsController(_uow, _organizationManager);
            //Act
            var result = controller.UpdateOrganization(updateOrganizationDTO);

            //Assert
            result.Result.Should().BeOfType(typeof(OkObjectResult));
        }
    }
}
