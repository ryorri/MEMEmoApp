using AutoMapper;
using MEMEmoAppBackend.Application.Objects.Sessions;
using MEMEmoAppBackend.Application.Services.Interfaces;
using MEMEmoAppBackend.Domain.Entities;
using MEMEmoAppBackend.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Infrastructure.Servicers
{
    public class SessionsService : ISessionsService
    {
        private readonly MEMEmoAppDbContext _dbContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IMapper _mapper;
        public SessionsService(MEMEmoAppDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager, IMapper mapper)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;

        }
        public async Task<List<SessionDTO>> GetAllSessions()
        {
            var list = await _dbContext.Sessions.ToListAsync();

            var sessionDto = _mapper.Map<List<SessionDTO>>(list);

            return sessionDto;
        }

        public async Task<List<SessionDTO>> GetPlayerSessions(string userId)
        {
            var sessions = await _dbContext.Sessions
            .Where(s => s.UserId == userId)  
            .ToListAsync();

            var dto = _mapper.Map<List<SessionDTO>>(sessions);

            return dto;
        }

        public async Task<List<SessionDTO>> GetRank()
        {
            var sessions = await _dbContext.Sessions
            .OrderBy(s => s.Score)
            .ToListAsync();

            var dto = _mapper.Map<List<SessionDTO>>(sessions);

            return dto;
        }

        public async Task SaveSession(SessionDTO sess)
        {
            var dto = _mapper.Map<Sessions>(sess);

            await _dbContext.Sessions.AddAsync(dto);

            await _dbContext.SaveChangesAsync();
        }
    }
}
