using MEMEmoAppBackend.Application.Objects.Sessions;
using MEMEmoAppBackend.Application.Objects.User;
using MEMEmoAppBackend.Application.Services.Interfaces;
using MEMEmoAppBackend.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace MEMEmoAppBackend.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly ISessionsService _sessionService;

        public SessionController(ISessionsService sessionService)
        {
            _sessionService = sessionService;
        }

        [HttpGet("get-all-sessions")]
        [ProducesResponseType(typeof(List<SessionDTO>), 200)]
        public async Task<IActionResult> GetSessionList()
        {
            var list = await _sessionService.GetAllSessions();
            return Ok(list);
        }

        [HttpGet("get-player-sessions")]
        [ProducesResponseType(typeof(List<SessionDTO>), 200)]
        public async Task<IActionResult> GetPlayerSessionsList(string userId)
        {
            var list = await _sessionService.GetPlayerSessions(userId);
            return Ok(list);
        }

        [HttpGet("get-ranking")]
        [ProducesResponseType(typeof(List<SessionDTO>), 200)]
        public async Task<IActionResult> GetRanking()
        {
            var list = await _sessionService.GetRank();
            return Ok(list);
        }

        [HttpPost("save-session")]
        public async Task<IActionResult> SaveSession(SessionDTO sess)
        {
            if (sess == null)
            {
                return BadRequest("Invalid user data.");
            }

            await _sessionService.SaveSession(sess);
            
                return Ok(new { message = "Save successfully." });
           
        }

    }
}
