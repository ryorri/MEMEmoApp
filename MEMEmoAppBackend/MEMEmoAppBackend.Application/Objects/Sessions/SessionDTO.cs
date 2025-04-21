using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Application.Objects.Sessions
{
    public class SessionDTO
    {
        public string UserId { get; set; }
        public int Score { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
