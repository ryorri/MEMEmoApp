using MEMEmoAppBackend.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MEMEmoAppBackend.Domain.Entities
{
    public class Sessions : ISessions
    {
        public int Id { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public int Score { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
