using Actibooking.Data.Configurations;
using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Data.Repository.Implementation;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Actibooking.Services;
using Microsoft.OpenApi.Models;

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

            var provider = builder.Services.BuildServiceProvider();
            var configuration = provider.GetRequiredService<IConfiguration>();

            builder.Services.AddControllers();
            builder.Services.AddDbContext<ActibookingDBContex>();
            /*builder.Services.ConfigureRateLimiting();*/
            builder.Services.AddAuthentication();
            builder.Services.ConfigureIdentity();
            builder.Services.ConfigureJWT(configuration);
            builder.Services.AddScoped<IRepo<Organization>, OrganizationRepository>();
            builder.Services.AddScoped<IRepo<Course>, DataRepository<Course>>();
            builder.Services.AddScoped<IRepo<Adress>, DataRepository<Adress>>();
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IAuthManager, AuthManager>();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddAutoMapper(typeof(MapperInitilizer));


            AddSwaggerDoc(builder.Services);

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

        private static void AddSwaggerDoc(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Authorization header using the Bearer scheme. Enter 'Bearer' [space] and then your token in the text input below. Example: 'Bearer 12345abcdef'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Scheme = "0auth2",
                            Name = "Bearer",
                            In = ParameterLocation.Header
                        },
                        new List<string>()
                    }
                });
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Actibooking", Version = "v1" });
            });
        }
    }
}