using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MEMEmoAppBackend.Application.Objects.User;
using MEMEmoAppBackend.Application.Services.Interfaces;
using MEMEmoAppBackend.Domain.Entities;
using MEMEmoAppBackend.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MEMEmoAppBackend.Infrastructure.Services
{
    public class UserService : IUserService
    {
        private readonly MEMEmoAppDbContext _dbContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(MEMEmoAppDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager, ILogger<UserService> logger)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<bool> Create(RegisterUserDto user)
        {
            var newUser = new User
            {
                UserName = user.UserName,
                Email = user.Email
                

            };
            var result = await _userManager.CreateAsync(newUser, user.Password);
            return result.Succeeded;
        }

        public async Task<bool> LogIn(LoginUserDto user)
        {
            var login = await _userManager.FindByNameAsync(user.UserName);
            if (login == null)
            {
                return false;
            }

            var result = await _signInManager.PasswordSignInAsync(login, user.Password, false, false);
            
            if (!result.Succeeded)
            {
                return false;
            }
            return result.Succeeded;
        }

        public async Task<List<User>> GetUsers()    
        {
            return await _userManager.Users.ToListAsync();
        }
    }
}
