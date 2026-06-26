using Server.Domain.Dto.Db;
using Server.Domain.Dto.Request.Clips;
using Server.Repository.Interfaces;
using Server.Service.Interfaces;

namespace Server.Service.Services;

public class ClipService(IClipRepository clipRepository) : IClipService
{
    public async Task Create(CreateClip request, Guid userId)
    {
        var uri = new Uri(request.Url);

        await clipRepository.Create(new ClipCreateDb
        {
            Title = request.Content.Length > 20 
                ? request.Content[..20] 
                : request.Content,
            Content = request.Content,
            Url = request.Url,
            Domain = uri.Host,
            UserId = userId
        });
    }
}