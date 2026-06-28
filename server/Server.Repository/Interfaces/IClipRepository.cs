using Server.Domain.Dto.Db;
using Server.Domain.Entities;

namespace Server.Repository.Interfaces;

public interface IClipRepository
{
    Task<IList<Clip>> GetClipsByUser(Guid userId);
    Task<Clip> GetById(Guid clipId);
    Task<Guid> Create(ClipCreateDb request);
    Task<bool> ExistsById(Guid clipId);
}