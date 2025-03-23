using MEMEmoAppBackend.Application.Services.Interfaces;
using MEMEmoAppBackend.Domain.Entities;
using MEMEmoAppBackend.Infrastructure.Data;
using MEMEmoAppBackend.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Infrastructure
{
    public static class InfrastructureInjection
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<MEMEmoAppDbContext>(options =>
                options.UseSqlite(config.GetConnectionString("DefaultConnection")));

            #region Scopes

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<MEMEmoAppDbContext>()
                .AddDefaultTokenProviders();

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUtilityService, UtilityService>();
            #endregion

        }
    }
}
