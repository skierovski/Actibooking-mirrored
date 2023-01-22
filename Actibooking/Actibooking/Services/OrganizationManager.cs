using Actibooking.Controllers;
using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using AutoMapper;

namespace Actibooking.Services
{
    public class OrganizationManager : IOrganizationManager
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public OrganizationManager(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<IEnumerable<Organization>> CheckIfEmpty()
        {
            var organizationList = await _uow.OrganizationRepo.GetAsync();
            if (organizationList.Count() > 0)
            {
                return organizationList;
            }
            throw new NotFoundException("No Organization Found", organizationList);
        }

        public async Task<Organization> FindOrganzation(int organizationId)
        {
            var organization = await _uow.OrganizationRepo.GetByIdAsync(organizationId);
            if (organization != null)
            {
                return organization;
            }
            throw new NotFoundException("Organization", organizationId);
        }

        public async Task<bool> MapOrganization(NewOrganizationDTO newOrganizationDTO)
        {
            var organization = _mapper.Map<Organization>(newOrganizationDTO);
            await _uow.OrganizationRepo.InsertAsync(organization);
            await _uow.SaveChangesAsync();
            return true;
        }

        public async Task ConvertOrganization(UpdateOrganizationDTO updateOrganizationDTO)
        {
            var organization = await _uow.OrganizationRepo.GetByIdAsync(updateOrganizationDTO.Id);
            if (organization != null)
            {
                organization.Description = updateOrganizationDTO.Description;
                organization.Name = updateOrganizationDTO.Name;
                organization.LogoUrl = updateOrganizationDTO.LogoUrl;
                organization.PhotosUrl = updateOrganizationDTO.PhotosUrl;
                _uow.OrganizationRepo.Update(organization);
                await _uow.SaveChangesAsync();
            }
            else
            {
                throw new NotFoundException("Organization", updateOrganizationDTO.Id);
            }
        }
    }
}
