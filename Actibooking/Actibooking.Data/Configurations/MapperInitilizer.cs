﻿using Actibooking.Data.Repository;
using Actibooking.Models;
using AutoMapper;

namespace Actibooking.Data.Configurations
{
    public class MapperInitilizer : Profile
    {
        public MapperInitilizer()
        {
            CreateMap<ActiBookingUser, UserDTO>().ReverseMap();
            CreateMap<Child, AddingChildDTO>().ReverseMap();
            CreateMap<Organization, OrganizationDTO>().ReverseMap();
            CreateMap<Organization, NewOrganizationDTO>().ReverseMap();
            CreateMap<Course, CourseDTO>().ReverseMap();
        }
    }
}
