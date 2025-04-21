using MEMEmoAppBackend.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Domain.Entities
{
    public class User : IdentityUser, IUser
    {
        public ICollection<Sessions> Sessions { get; set; }
    }
}
