using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Models;

namespace Actibooking
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("CORSPolicy",
                    builder =>
                    {
                        builder
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .WithOrigins("http://localhost:3000");
                    });
            });

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContext<ActibookingDBContex>();
            builder.Services.AddScoped<IRepo<Organization>, DataRepository<Organization>>();
            builder.Services.AddScoped<IRepo<Course>, DataRepository<Course>>();
            builder.Services.AddScoped<IRepo<Adress>, DataRepository<Adress>>();
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("CORSPolicy");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}