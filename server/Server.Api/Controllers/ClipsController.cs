using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Api.Extensions;
using Server.Domain.Dto.Request.Clips;
using Server.Domain.Interfaces.Service;

namespace Server.Api.Controllers;

[Authorize]
[ApiController]
[Route("api/v1/[controller]")]
public class ClipsController(IClipService clipService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateClip request)
    {
        try
        {
            return Ok(await clipService.Create(request, User.GetUserId()));
        }
        catch (Exception e)
        {
            return StatusCode(500, e.Message);
        }
    }
}