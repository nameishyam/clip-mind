namespace Server.Domain.Entities;

public class Clip : BaseEntity
{
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Content { get; set; }
    public string? Url { get; set; }
    public string? Domain { get; set; }
    public string? Metadata { get; set; }

    public User? User { get; set; }
}