using MEMEmoAppBackend.Application.Objects.User;
using MEMEmoAppBackend.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MEMEmoAppBackend.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("users")]
        [ProducesResponseType(typeof(List<UserDTO>), 200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();
            return Ok(users);
        }

        [HttpGet("user")]
        [ProducesResponseType(typeof(UserDTO), 200)]
        [ProducesResponseType(400)]
        public async Task<IActionResult> GetUser(string id)
        {
            var user = await _userService.GetUserById(id);
            return Ok(user);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterUserDto user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            var result = await _userService.Create(user);
            if (result)
            {
                return Ok(new { message = "User registered successfully." });
            }
            else
                return BadRequest();
        }

        [HttpPost("login")]
        [ProducesResponseType(typeof(UserDTO), 200)]  
        [ProducesResponseType(401)]  
        public async Task<IActionResult> LogIn(LoginUserDto user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            var result = await _userService.LogIn(user);

            if (result == null)
            {
                return Unauthorized("Wrong data");
            }

            return Ok(result);
        }
    }
}
