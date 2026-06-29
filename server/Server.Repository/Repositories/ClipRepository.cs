using Microsoft.EntityFrameworkCore;
using Server.Domain.Entities;
using Server.Domain.Interfaces.Repository;
using Server.Repository.Context;

namespace Server.Repository.Repositories;

public class ClipRepository(ServerDbContext context) : IClipRepository
{
    public async Task<Guid> Create(Clip clip)
    {
        await context.Clips.AddAsync(clip);
        await context.SaveChangesAsync();

        return clip.Id;
    }

    public async Task<IList<Clip>> GetClipsByUser(Guid userId)
    {
        return await context.Clips
            .Where(c => c.UserId == userId)
            .OrderByDescending(c => c.CreatedAt)
            .ToListAsync();
    }

    public async Task<Clip> GetById(Guid clipId)
    {
        return await context.Clips.FirstAsync(c => c.Id == clipId);
    }

    public async Task<bool> ExistsById(Guid clipId)
    {
        return await context.Clips.AnyAsync(c => c.Id == clipId);
    }
}