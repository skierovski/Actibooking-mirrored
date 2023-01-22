using Actibooking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepo<Organization> OrganizationRepo { get; }
        IRepo<Course> CourseRepo { get; }
        IRepo<Address> AdressRepo { get; }
        IRepo<Participant> ParticipantRepo { get; }
        IRepo <ActiBookingUser> UserRepo { get; }
        IRepo<CourseTag> CourseTagRepo { get; }
        IRepo<OrganizationType> OrganizationTypeRepo { get; }
        IRepo<Child> ChildRepo { get; }
        IRepo<Trainer> TrainerRepo { get; }
        IRepo<Rating> RatingRepo { get; }
        IRepo<GoogleAuth> GoogleRepo { get; }

        Task SaveChangesAsync();
    }
}
