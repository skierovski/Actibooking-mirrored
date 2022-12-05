using Actibooking.Data.Repository;
using Actibooking.Exceptions;
using Actibooking.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Actibooking.Services
{
    public interface IUserService
    {
        Task<IActionResult> AddChild(AddingChildDTO addingChildDTO, IUnitOfWork _uow, IMapper _mapper);
        Task<IEnumerable<Course>> GetUserCourses(string userId, IUnitOfWork _uow);
        Task AddUserToCourse(AddingUserToCourseDTO addingUserToCourse, IUnitOfWork _uow);
        Task AddChildToCourse(AddingChildToCourseDTO addingChildToCourse, IUnitOfWork _uow);
        bool CheckIsNull(string massage, object ObjectToCheck, object Key);
        bool CheckAge(string birthDate, int? minAge, int? maxAge);
    }
}
