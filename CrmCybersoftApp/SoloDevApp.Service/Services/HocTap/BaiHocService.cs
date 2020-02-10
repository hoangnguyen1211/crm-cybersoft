using AutoMapper;
using SoloDevApp.Repository.Models;
using SoloDevApp.Repository.Repositories;
using SoloDevApp.Service.Infrastructure;
using SoloDevApp.Service.ViewModels;

namespace SoloDevApp.Service.Services
{
    public interface IBaiHocService : IService<BaiHoc, BaiHocViewModel>
    {
    }

    public class BaiHocService : ServiceBase<BaiHoc, BaiHocViewModel>, IBaiHocService
    {
        public BaiHocService(IBaiHocRepository baiHocRepository, IMapper mapper)
            : base(baiHocRepository, mapper)
        {
        }
    }
}