﻿using Actibooking.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepo<Organization> OrganizationRepo { get; }
        IRepo<Course> CourseRepo { get; }
        IRepo<Adress> AdressRepo { get; }
        IRepo<CourseTag> CourseTagRepo { get; }
        IRepo<OrganizationType> OrganizationTypeRepo { get; }
        IRepo<Trainer> TrainerRepo { get; }

        Task SaveChangesAsync();
    }
}