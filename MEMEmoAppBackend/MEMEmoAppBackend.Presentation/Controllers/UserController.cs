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
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();
            return Ok(users);
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
        public async Task<IActionResult> LogIn(LoginUserDto user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }

            var result = await _userService.LogIn(user);

            if (!result)
            {
                return Unauthorized("Wrong data");
            }

            var response = new
            {
                message = "User logged in successfully.",
                user = user
            };

            return Ok(response);
        }
    }
}
