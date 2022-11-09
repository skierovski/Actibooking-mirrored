using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;

namespace Actibooking.Data.Configurations
{
    public class MapperInitilizer : Profile
    {
        public MapperInitilizer()
        {
            CreateMap<ABUser, UserDTO>().ReverseMap();
            CreateMap<Organization, OrganizationDTO>().ReverseMap();
            CreateMap<Course, CourseDTO>().ReverseMap();
        }
    }
}
