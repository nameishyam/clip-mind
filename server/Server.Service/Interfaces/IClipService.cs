using Server.Domain.Dto.Request.Clips;
using Server.Domain.Dto.Response;

namespace Server.Service.Interfaces;

public interface IClipService
{
    Task<IList<ClipResponse>> GetClipsByUser(Guid userId);
    Task<ClipResponse> Create(CreateClip request, Guid userId);
}