using AutoMapper;
using SoloDevApp.Repository.Models;
using SoloDevApp.Repository.Repositories;
using SoloDevApp.Service.Infrastructure;
using SoloDevApp.Service.ViewModels;

namespace SoloDevApp.Service.Services
{
    public interface ILopHocService : IService<LopHoc, LopHocViewModel>
    {
    }

    public class LopHocService : ServiceBase<LopHoc, LopHocViewModel>, ILopHocService
    {
        public LopHocService(ILopHocRepository lopHocRepository, IMapper mapper)
            : base(lopHocRepository, mapper)
        {
        }
    }
}