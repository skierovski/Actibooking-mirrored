using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Actibooking.Models;


namespace Actibooking.Data.Repository.Implementation
{
    public class CourseRepository : DataRepository<Course>
    {
        public CourseRepository(ActibookingDBContex ctx) : base(ctx)
        {
        }
    }
}