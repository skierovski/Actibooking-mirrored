using FakeItEasy;
using Actibooking.Models;

namespace Actibooking.Tests.Controller
{
    public class OrganizationsControllerTests
    {
        private IUnitOfWork _organizationManager;

        public OrganizationsControllerTests()
        {
            _organizationManager = A.Fake<IUnitOfWork>();
        }
    }
}
