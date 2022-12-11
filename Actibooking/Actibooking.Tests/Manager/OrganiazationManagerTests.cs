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

        [Fact]
        public void OrganizationManager_FindOrganization_ReturnOrganization()
        {
            //Arange
            var organization = A.Fake<Organization>();
            A.CallTo(() => _uow.OrganizationRepo.GetByIdAsync(organization.Id)).Returns(organization);
            var manager = new OrganizationManager(_uow, _mapper);

            //Act
            var result = manager.FindOrganzation(organization.Id);

            //Assert
            result.Result.Equals(organization);
        }
        [Fact]
        public void OrganizationManager_FindOrganization_ReturnExeption()
        {
            //Arange
            var organization = A.Fake<Organization>();
            A.CallTo(() => _uow.OrganizationRepo.GetByIdAsync(organization.Id)).Returns((Organization) null);
            var manager = new OrganizationManager(_uow, _mapper);
            //Act
            var result = manager.FindOrganzation(organization.Id);

            //Assert
            result.Exception.InnerException.Message.Equals($"Organization ({organization.Id}) was not found");
        }

        [Fact]
        public void OrgazationManager_MapOrganization_ReturnTrue()
        {
            //Arange
            var newOrganizationDTO = A.Fake<NewOrganizationDTO>();
            var organization = A.Fake<Organization>();
            A.CallTo(() => _mapper.Map<Organization>(newOrganizationDTO)).Returns(organization);
            A.CallTo(() => _uow.OrganizationRepo.InsertAsync(organization)).Returns(Task.CompletedTask);
            A.CallTo(() => _uow.SaveChangesAsync()).Returns(Task.CompletedTask);
            var manager = new OrganizationManager(_uow, _mapper);

            //Act

            var result = manager.MapOrganization(newOrganizationDTO);

            //Assert
            result.Result.Equals(true);
        }

        [Fact]
        public void OrganizationManager_ConvertOrganization_ReturnTask()
        {
            var updateOrganizationDTO = A.Fake<UpdateOrganizationDTO>();
            var organization = A.Fake<Organization>();
            A.CallTo(() => _uow.OrganizationRepo.GetByIdAsync(updateOrganizationDTO.Id)).Returns(organization);
            A.CallTo(() => _uow.OrganizationRepo.Update(organization)).DoesNothing();
            A.CallTo(() => _uow.SaveChangesAsync()).DoesNothing();
            var manager = new OrganizationManager(_uow, _mapper);

            //Act
            var result = manager.ConvertOrganization(updateOrganizationDTO);

            //Assert
           result.IsCompletedSuccessfully.Equals(true);
        }
    }
}
