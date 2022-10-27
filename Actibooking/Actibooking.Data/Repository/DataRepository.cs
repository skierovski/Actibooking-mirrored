using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public class DataRepository<TEntity> : IRepo<TEntity> where TEntity : class
    {

        private readonly ActibookingDBContex _ctx;
        private readonly DbSet<TEntity> _dbSet;

        public DataRepository(ActibookingDBContex ctx)
        {
            _ctx = ctx;
            _dbSet = ctx.Set<TEntity>();
        }
        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<TEntity>> GetAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public Task InsertAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task SaveChangesAsync()
        {
            throw new NotImplementedException();
        }

        public void Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
