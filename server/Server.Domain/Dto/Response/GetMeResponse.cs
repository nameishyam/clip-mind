namespace Server.Domain.Dto.Response;

public class GetMeResponse
{
    public UserResponse User { get; set; } = null!;
    public IList<ClipResponse> Clips { get; set; } = null!;
}