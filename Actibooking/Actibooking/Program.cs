using Actibooking.Data.Configurations;
using Actibooking.Data;
using Actibooking.Data.Repository;
using Actibooking.Data.Repository.Implementation;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Actibooking.Services;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Serilog;
using Actibooking.Middleware;
using System.Text.Json.Serialization;

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

            // Cofigure Sirilog and Seq
            // https://datalust.co/download and install SeQ
            builder.Host.UseSerilog((ctx,lc) => lc.WriteTo.Console().ReadFrom.Configuration(ctx.Configuration));

            // Add services to the container.

            var provider = builder.Services.BuildServiceProvider();
            var configuration = provider.GetRequiredService<IConfiguration>();

            builder.Services.AddControllers();

            builder.Services.AddDbContext<ActibookingDBContex>();
            /*builder.Services.ConfigureRateLimiting();*/
            builder.Services.AddAuthentication();
            builder.Services.ConfigureIdentity();
            
            builder.Services.AddScoped<IRepo<Organization>, DataRepository<Organization>>();
            builder.Services.AddScoped<IRepo<Course>, DataRepository<Course>>();
            builder.Services.AddScoped<IRepo<Trainer>, DataRepository<Trainer>>();
            builder.Services.AddScoped<IRepo<ActiBookingUser>, DataRepository<ActiBookingUser>>();
            builder.Services.AddScoped<IRepo<Participant>, DataRepository<Participant>>();
            builder.Services.AddScoped<IRepo<Child>, DataRepository<Child>>();
            builder.Services.AddScoped<IRepo<Address>, DataRepository<Address>>();
            builder.Services.AddScoped<IRepo<CourseTagDTO>, DataRepository<CourseTagDTO>>();
            builder.Services.AddScoped<IRepo<OrganizationType>, DataRepository<OrganizationType>>();
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IAuthManager, AuthManager>();
            builder.Services.AddScoped<IUserService, UserService>();
            builder.Services.AddScoped<ICoursesManager, CourseManager>();
            builder.Services.AddScoped<ITrainerManager, TrainerManager>();
            builder.Services.AddScoped<OrganizationManager>();

            builder.Services.AddAuthentication(o => {
                o.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(o =>
            {
                o.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero,
                    ValidIssuer = builder.Configuration["JwT:Issuer"],
                    ValidAudience = builder.Configuration["JwT:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("KEY", EnvironmentVariableTarget.Machine)))
                };
            });

            //Add Caching
            builder.Services.AddResponseCaching(options =>
            {
                options.MaximumBodySize = 1024;
                options.UseCaseSensitivePaths = true;
            });
            // Finish Caching 

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

            app.UseMiddleware<ExceptionMiddleware>();

            app.UseHttpsRedirection();

            app.UseCors("CORSPolicy");


            //Add Caching
            app.UseResponseCaching();
            app.Use(async (contex, next) =>
            {
                contex.Response.GetTypedHeaders().CacheControl =
                new Microsoft.Net.Http.Headers.CacheControlHeaderValue()
                {
                    Public = true,
                    MaxAge = TimeSpan.FromSeconds(10)
                };
                contex.Response.Headers[Microsoft.Net.Http.Headers.HeaderNames.Vary] =
                new string[] { "Accept-Encoding" };
                await next();
            });

            // Finish Caching 

            app.UseAuthentication();
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