using MEMEmoAppBackend.Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Application.Interfaces
{
    public interface IMEMEmoAppDbContext
    {
        DbSet<User> User { get; }
    }
}
