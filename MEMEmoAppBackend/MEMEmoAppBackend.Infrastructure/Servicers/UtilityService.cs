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
    public class UtilityService : IUtilityService
    {
        private readonly MEMEmoAppDbContext _dbContext;

        public UtilityService(MEMEmoAppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> CheckConnection()
        {
            if(await _dbContext.Database.CanConnectAsync())
                return true;
            else
                return false;
        }
    }
}
