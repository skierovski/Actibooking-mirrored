using Actibooking.Models;
using Microsoft.EntityFrameworkCore;

namespace Actibooking.Data
{
    public class ActibookingDBContex : DbContext
    {
        private string _connectionString = "Server=DESKTOP-UFCR01P\\SQLEXPRESS;Database=Actibooking-CRUD-v2;Trusted_connection=True;";
        public DbSet<Adress> Adresses { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Organization> Organizations { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString: _connectionString);
            base.OnConfiguring(optionsBuilder);
        }
    }
}
