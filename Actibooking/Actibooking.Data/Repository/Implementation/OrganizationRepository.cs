using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Actibooking.Models;

namespace Actibooking.Data.Repository.Implementation
{
    public class OrganizationRepository : DataRepository<Organization>
    {
        public OrganizationRepository(ActibookingDBContex ctx) : base(ctx)
        {
        }

        public override async Task DeleteAsync(int id)
        {
            var entity = await _dbSet.Include(r => r.Adresses)
                    .Include(r => r.Courses).FirstOrDefaultAsync(o=> o.Id== id);
            _dbSet.Remove(entity);
        }

        public override async Task<IEnumerable<Organization>> GetAsync()
        {
            return await _dbSet.Include(r => r.Adresses)
                    .Include(r => r.Courses).Include(r => r.OrganizationTypes).ToListAsync();
        }

        public override async Task<Organization> GetByIdAsync(int id)
        {
            return await _dbSet.Include(r => r.Adresses)
                    .Include(r => r.Courses).Include(r => r.OrganizationTypes).FirstOrDefaultAsync(p=>p.Id==id);
        }
    }
}
