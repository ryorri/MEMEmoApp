using MEMEmoAppBackend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Domain.Interfaces
{
    public interface IUser
    {
        ICollection<Sessions> Sessions { get; set; }
    }
}
