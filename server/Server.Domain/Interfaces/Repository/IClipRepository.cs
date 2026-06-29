using Server.Domain.Entities;

namespace Server.Domain.Interfaces.Repository;

public interface IClipRepository
{
    Task<IList<Clip>> GetClipsByUser(Guid userId);
    Task<Clip> GetById(Guid clipId);
    Task<Guid> Create(Clip clip);
    Task<bool> ExistsById(Guid clipId);
}