using Server.Domain.Dto.Db;
using Server.Domain.Dto.Request.Clips;
using Server.Domain.Dto.Response;
using Server.Repository.Interfaces;
using Server.Service.Interfaces;

namespace Server.Service.Services;

public class ClipService(IClipRepository clipRepository) : IClipService
{
    public async Task<ClipResponse> Create(CreateClip request, Guid userId)
    {
        var clip = await clipRepository.GetById(
            await clipRepository.Create(new ClipCreateDb
            {
                Title = request.Content.Length > 20
                    ? request.Content[..20]
                    : request.Content,
                Content = request.Content,
                Url = request.Url,
                Domain = new Uri(request.Url).Host,
                UserId = userId
            }));

        return new ClipResponse
        {
            Id = clip.Id,
            Content = clip.Content,
            Url = clip.Url,
            Domain = clip.Domain,
            Title = clip.Title,
            CreatedAt = clip.CreatedAt
        };
    }

    public async Task<IList<ClipResponse>> GetClipsByUser(Guid userId)
    {
        return (await clipRepository.GetClipsByUser(userId))
            .Select(c => new ClipResponse
            {
                Id = c.Id,
                Content = c.Content,
                Domain = c.Domain,
                Title = c.Title,
                Url = c.Url,
                CreatedAt = c.CreatedAt
            })
            .ToList();
    }
}