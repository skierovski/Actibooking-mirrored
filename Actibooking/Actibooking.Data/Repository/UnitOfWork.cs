using Actibooking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ActibookingDBContex _ctx;
        public UnitOfWork(ActibookingDBContex ctx, IRepo<Organization> organizationRepo,
            IRepo<Course> courseRepo, IRepo<Address> adressRepo, IRepo<CourseTag> courseTag, IRepo<OrganizationType> organizationType, IRepo<Child> childRepo, IRepo<Trainer> trainer, IRepo<ActiBookingUser> userRepo, IRepo<Participant> participantRepo, IRepo<Rating> ratingRepo, IRepo<GoogleAuth> googleRepo)
        {
            _ctx = ctx;
            OrganizationRepo = organizationRepo;
            CourseRepo = courseRepo;
            AdressRepo = adressRepo;
            CourseTagRepo = courseTag;
            OrganizationTypeRepo = organizationType;
            ChildRepo = childRepo;
            TrainerRepo = trainer;
            UserRepo = userRepo;
            ParticipantRepo = participantRepo;
            RatingRepo = ratingRepo;
            GoogleRepo = googleRepo;

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
        public IRepo<ActiBookingUser> UserRepo { get; }
        public IRepo<Address> AdressRepo { get; }
        public IRepo<Child> ChildRepo { get; }
        public IRepo<Trainer> TrainerRepo { get; }
        public IRepo<Participant> ParticipantRepo { get; }
        public IRepo<CourseTag> CourseTagRepo { get; }
        public IRepo<Rating> RatingRepo { get; }
        public IRepo<OrganizationType> OrganizationTypeRepo { get; }
        public IRepo<GoogleAuth> GoogleRepo { get; }

        public async Task SaveChangesAsync()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
