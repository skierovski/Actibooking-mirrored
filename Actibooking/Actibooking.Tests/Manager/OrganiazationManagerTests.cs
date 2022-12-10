using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using Actibooking.Services;
using AutoMapper;
using FakeItEasy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FakeItEasy.Sdk;
using System.Collections;

namespace Actibooking.Tests.Service
{
    public class OrganiazationManagerTests
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public OrganiazationManagerTests()
        {
            _uow = A.Fake<IUnitOfWork>();
            _mapper = A.Fake<IMapper>();
        }

        [Fact]
        public void OrganizationManager_CheckIfEmpty_ReturnOrganizations()
        {
            //Arange
            var organization = new Organization();
            var organizationList = new List<Organization> { organization, organization, organization, organization };
            A.CallTo(() => _uow.OrganizationRepo.GetAsync()).Returns(organizationList);
            var manager = new OrganizationManager(_uow, _mapper);

            //Act
            var result = manager.CheckIfEmpty();

            //Assert
            result.Result.Equals(organizationList);
        }

        [Fact]
        public void OrganizationManager_CheckIfEmpty_ReturnExeption()
        {
            //Arange
            var organizationList = new List<Organization>();
            A.CallTo(() => _uow.OrganizationRepo.GetAsync()).Returns(organizationList);
            var manager = new OrganizationManager(_uow, _mapper);
            //Act
            var result = manager.CheckIfEmpty();

            //Assert
            result.Exception.InnerException.Message.Equals($"Organization ({organizationList}) was not found");
        }
    }
}
