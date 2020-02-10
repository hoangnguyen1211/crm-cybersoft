using AutoMapper;
using SoloDevApp.Repository.Models;
using SoloDevApp.Repository.Repositories;
using SoloDevApp.Service.Infrastructure;
using SoloDevApp.Service.ViewModels;

namespace SoloDevApp.Service.Services
{
    public interface IChuongHocService : IService<ChuongHoc, ChuongHocViewModel>
    {
    }

    public class ChuongHocService : ServiceBase<ChuongHoc, ChuongHocViewModel>, IChuongHocService
    {
        public ChuongHocService(IChuongHocRepository chuongHocRepository, IMapper mapper)
            : base(chuongHocRepository, mapper)
        {
        }
    }
}