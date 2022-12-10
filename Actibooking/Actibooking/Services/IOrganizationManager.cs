using Actibooking.Models;

namespace Actibooking.Services
{
    public interface IOrganizationManager
    {
        Task<IEnumerable<Organization>> CheckIfEmpty();
        Task<Organization> FindOrganzation(int organizationId);
        Task<bool> MapOrganization(NewOrganizationDTO newOrganizationDTO);
        Task ConvertOrganization(UpdateOrganizationDTO updateOrganizationDTO);
    }
}
