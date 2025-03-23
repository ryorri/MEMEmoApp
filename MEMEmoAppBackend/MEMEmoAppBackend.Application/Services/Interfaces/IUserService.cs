using MEMEmoAppBackend.Application.Objects.User;
using MEMEmoAppBackend.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Application.Services.Interfaces
{
    public interface IUserService
    {
        Task<bool> Create(RegisterUserDto user);

        Task<bool> LogIn(LoginUserDto user);

        Task<List<User>> GetUsers();
    }
}
