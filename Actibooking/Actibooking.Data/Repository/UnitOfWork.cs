using Actibooking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ActibookingDBContex _ctx;
        public UnitOfWork(ActibookingDBContex ctx, IRepo<Organization> organizationRepo,
            IRepo<Course> courseRepo, IRepo<Adress> adressRepo, IRepo<CourseTag> courseTag, IRepo<OrganizationType> organizationType)
        {
            _ctx = ctx;
            OrganizationRepo = organizationRepo;
            CourseRepo = courseRepo;
            AdressRepo = adressRepo;
            CourseTagRepo = courseTag;
            OrganizationTypeRepo = organizationType;
        }
        public virtual void Dispose(bool disposing)
        {
            if (disposing)
                _ctx.Dispose();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public IRepo<Organization> OrganizationRepo { get; }
        public IRepo<Course> CourseRepo { get; }
        public IRepo<Adress> AdressRepo { get; }

        public IRepo<CourseTag> CourseTagRepo { get; }

        public IRepo<OrganizationType> OrganizationTypeRepo { get; }

        public async Task SaveChangesAsync()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
