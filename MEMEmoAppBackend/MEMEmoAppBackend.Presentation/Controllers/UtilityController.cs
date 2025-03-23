using MEMEmoAppBackend.Application.Objects.User;
using MEMEmoAppBackend.Application.Services.Interfaces;
using MEMEmoAppBackend.Infrastructure.Services;
using Microsoft.AspNetCore.Mvc;

namespace MEMEmoAppBackend.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtilityController : ControllerBase
    {
        private readonly IUtilityService _utilityService;

        public UtilityController(IUtilityService utilityService)
        {
            _utilityService = utilityService;
        }

        [HttpGet("check-connection")]
        public async Task<bool> CheckConnectionWithDatabase()
        {
            var conn = await _utilityService.CheckConnection();

            return conn;
        }
    }
}
