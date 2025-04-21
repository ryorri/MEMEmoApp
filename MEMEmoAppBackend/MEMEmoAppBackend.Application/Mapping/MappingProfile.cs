using AutoMapper;
using MEMEmoAppBackend.Domain.Entities;
using MEMEmoAppBackend.Application.Objects.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MEMEmoAppBackend.Application.Objects.Sessions;

namespace MEMEmoAppBackend.Application.Mapping
{
    public class MappingProfile: Profile
    {
        public MappingProfile() 
        {
            CreateMap<User, RegisterUserDto>();
            CreateMap<User, LoginUserDto>();
            CreateMap<SessionDTO, Sessions>();
            CreateMap<Sessions, SessionDTO>();
            CreateMap<User, UserDTO>();
        }
    }
}
