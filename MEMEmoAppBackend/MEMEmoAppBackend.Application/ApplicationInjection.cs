using MEMEmoAppBackend.Application.Interfaces;
using MEMEmoAppBackend.Application.Mapping;
using MEMEmoAppBackend.Application.Services.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Application
{
    public static class ApplicationInjection
    {
        public static void AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(MappingProfile));

        }
    }
}
