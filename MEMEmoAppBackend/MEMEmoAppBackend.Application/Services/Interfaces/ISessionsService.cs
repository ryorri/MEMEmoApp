using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MEMEmoAppBackend.Application.Objects.Sessions;

namespace MEMEmoAppBackend.Application.Services.Interfaces
{
    public interface ISessionsService
    {
        Task SaveSession(SessionDTO sess);
        Task<List<SessionDTO>> GetPlayerSessions(string userId);
        Task<List<SessionDTO>> GetAllSessions();
        Task<List<SessionDTO>> GetRank();
    }
}
