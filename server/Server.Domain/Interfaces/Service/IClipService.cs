using Server.Domain.Dto.Request.Clips;
using Server.Domain.Dto.Response;

namespace Server.Domain.Interfaces.Service;

public interface IClipService
{
    Task<IList<ClipResponse>> GetClipsByUser(Guid userId);
    Task<ClipResponse> Create(CreateClip request, Guid userId);
}