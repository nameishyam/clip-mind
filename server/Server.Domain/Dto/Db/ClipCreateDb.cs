namespace Server.Domain.Dto.Db;

public class ClipCreateDb
{
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Content { get; set; }
    public string? Url { get; set; }
    public string? Domain { get; set; }
    public string? Metadata { get; set; }
}