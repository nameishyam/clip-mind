using System.ComponentModel.DataAnnotations;

namespace Server.Domain.Dto.Request.Clips;

public class CreateClip
{
    [Required] public string Content { get; set; } = string.Empty;
    [Required] public string Url { get; set; } = string.Empty;
}