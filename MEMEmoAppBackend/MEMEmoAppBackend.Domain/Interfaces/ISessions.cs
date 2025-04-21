using MEMEmoAppBackend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Domain.Interfaces
{
    public interface ISessions
    {
        int Id { get; set; }
        User User { get; set; }
        int Score { get; set; }
        DateTime CreatedAt { get; set; }

    }
}
