using Server.Domain.Dto.Db;
using Server.Domain.Entities;
using Server.Repository.Context;
using Server.Repository.Interfaces;

namespace Server.Repository.Repositories;

public class ClipRepository(ServerDbContext context) : IClipRepository
{
    public async Task Create(ClipCreateDb request)
    {
        await context.Clips.AddAsync(new Clip
        {
            UserId = request.UserId,
            Content = request.Content,
            Domain = request.Domain,
            Title = request.Title,
            Url = request.Url
        });

        await context.SaveChangesAsync();
    }
}