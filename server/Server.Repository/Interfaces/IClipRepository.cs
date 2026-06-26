using Server.Domain.Dto.Db;

namespace Server.Repository.Interfaces;

public interface IClipRepository
{
    Task Create(ClipCreateDb request);
}