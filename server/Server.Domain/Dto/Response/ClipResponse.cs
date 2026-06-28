namespace Server.Domain.Dto.Response;

public class ClipResponse
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string Content { get; set; } = null!;
    public string Url { get; set; } = null!;
    public string Domain { get; set; } = null!;
    public DateTime CreatedAt { get; set; }
}