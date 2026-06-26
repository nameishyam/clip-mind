using Server.Domain.Dto.Request.Clips;

namespace Server.Service.Interfaces;

public interface IClipService
{
    Task Create(CreateClip request, Guid userId);
}