﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public class DataRepository<TEntity> : IRepo<TEntity> where TEntity : class
    {

        protected readonly ActibookingDBContex _ctx;
        protected readonly DbSet<TEntity> _dbSet;

        public DataRepository(ActibookingDBContex ctx)
        {
            _ctx = ctx;
            _dbSet = ctx.Set<TEntity>();
        }
        public virtual async Task DeleteAsync(int id)
        {
/*            var entity = context.Blogs.OrderBy(e => e.Name).Include(e => e.Posts).First();
            var entity2 = await _dbSet.FindAsync(id).In;*/
            var entity = await _dbSet.FindAsync(id);
            _dbSet.Remove(entity);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public virtual async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task InsertAsync(TEntity entity)
        {
            await _dbSet.AddAsync(entity);
        }

        public async Task SaveChangesAsync()
        {
            await _ctx.SaveChangesAsync();
        }

        public void Update(TEntity entity)
        {
            _ctx.Update(entity);
        }
    }
}