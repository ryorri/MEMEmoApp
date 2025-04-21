using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
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
        private readonly IMapper _mapper;

        public UserService(MEMEmoAppDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager, ILogger<UserService> logger,IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
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

        public async Task<UserDTO> LogIn(LoginUserDto user)
        {
            var login = await _userManager.FindByNameAsync(user.UserName);
            if (login == null)
            {
                return null;
            }

            var tryLogin = await _signInManager.PasswordSignInAsync(login, user.Password, false, false);
            
            if (tryLogin.Succeeded)
            {
                var userDto = _mapper.Map<UserDTO>(login);
                return userDto;
            }
            else
            {
                return null;
            }
        }

        public async Task<List<User>> GetUsers()    
        {
            return await _userManager.Users.ToListAsync();
        }
        public async Task<UserDTO> GetUserById(string id)
        {
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.Id == id);


            if (user != null)
            {
                var dto = _mapper.Map<UserDTO>(user);
                return dto;
            }
            else
                return null;
                
        }
    }
}
