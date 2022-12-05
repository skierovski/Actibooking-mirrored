using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Actibooking.Data.Repository
{
    public interface IRepo<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> GetAsync();

        Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "");
        Task<TEntity> GetByIdAsync(int id);
        Task<TEntity> GetByIdAsync(string id);
        Task InsertAsync(TEntity entity);
        void Update(TEntity entity);
        Task DeleteAsync(int id);
        Task SaveChangesAsync();
        Task<bool> Exists(Expression<Func<TEntity, bool>> filter = null);

    }
}
