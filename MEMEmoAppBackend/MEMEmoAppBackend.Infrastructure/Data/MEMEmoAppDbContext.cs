using MEMEmoAppBackend.Application.Interfaces;
using MEMEmoAppBackend.Domain.Entities;
using MEMEmoAppBackend.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Infrastructure.Data
{
    public class MEMEmoAppDbContext : IdentityDbContext<IdentityUser>, IMEMEmoAppDbContext
    {

        public MEMEmoAppDbContext(DbContextOptions<MEMEmoAppDbContext> options) : base(options) { }

        public DbSet<User> User { get; set; }

        public DbSet<Sessions> Sessions { get; set; }
    }
}
