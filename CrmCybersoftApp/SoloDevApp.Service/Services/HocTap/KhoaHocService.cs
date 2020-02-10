using AutoMapper;
using Newtonsoft.Json;
using SoloDevApp.Repository.Models;
using SoloDevApp.Repository.Repositories;
using SoloDevApp.Service.Constants;
using SoloDevApp.Service.Infrastructure;
using SoloDevApp.Service.ViewModels;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SoloDevApp.Service.Services
{
    public interface IKhoaHocService : IService<KhoaHoc, KhoaHocViewModel>
    {
        Task<ResponseEntity> AddChapterToCourseAsync(dynamic id, ChuongHocViewModel modelVm);
        Task<ResponseEntity> SortingAsync(dynamic id, List<int> dsChuongHoc);
    }

    public class KhoaHocService : ServiceBase<KhoaHoc, KhoaHocViewModel>, IKhoaHocService
    {
        IKhoaHocRepository _khoaHocRepository;
        IChuongHocRepository _chuongHocRepository;
        IBaiHocRepository _baiHocRepository;
        public KhoaHocService(IKhoaHocRepository khoaHocRepository,
            IChuongHocRepository chuongHocRepository,
            IBaiHocRepository baiHocRepository,
            IMapper mapper)
            : base(khoaHocRepository, mapper)
        {
            _khoaHocRepository = khoaHocRepository;
            _chuongHocRepository = chuongHocRepository;
            _baiHocRepository = baiHocRepository;
        }

        public async Task<ResponseEntity> AddChapterToCourseAsync(dynamic id, ChuongHocViewModel modelVm)
        {
            try
            {
                KhoaHoc khoaHoc = await _khoaHocRepository.GetSingleByIdAsync(id);
                if (khoaHoc == null)
                    return new ResponseEntity(StatusCodeConstants.NOT_FOUND);

                // Kiểm tra xem tên có bị trùng không
                //if (await _chuongHocRepository.CheckValidByConditionAsync("TenChuong", modelVm.TenChuong))
                //    return new ResponseEntity(StatusCodeConstants.BAD_REQUEST, modelVm, "Tên đã được sử dụng!");

                // Thêm mới chương học
                ChuongHoc chuongHoc = _mapper.Map<ChuongHoc>(modelVm);
                chuongHoc = await _chuongHocRepository.InsertAsync(chuongHoc);
                if (chuongHoc == null) // Nếu thêm mới thất bại
                    return new ResponseEntity(StatusCodeConstants.BAD_REQUEST, modelVm, MessageConstants.INSERT_ERROR);

                var khoaHocVm = _mapper.Map<KhoaHocViewModel>(khoaHoc);
                khoaHocVm.DanhSachChuongHoc.Add(chuongHoc.Id);

                // Cập nhật lại danh sách chương của khóa học
                khoaHoc = _mapper.Map<KhoaHoc>(khoaHocVm);
                if ((await _khoaHocRepository.UpdateAsync(id, khoaHoc)) == null)
                    return new ResponseEntity(StatusCodeConstants.BAD_REQUEST, modelVm, MessageConstants.INSERT_ERROR);

                var thongTinChuongHocVm = _mapper.Map<ThongTinChuongHocViewModel>(chuongHoc);
                return new ResponseEntity(StatusCodeConstants.OK, thongTinChuongHocVm, MessageConstants.INSERT_SUCCESS);
            }
            catch(Exception ex)
            {
                return new ResponseEntity(StatusCodeConstants.ERROR_SERVER, ex.Message);
            }

        }

        public override async Task<ResponseEntity> GetSingleByIdAsync(dynamic id)
        {
            try
            {
                KhoaHoc khoaHoc = await _khoaHocRepository.GetSingleByIdAsync(id);
                var khoaHocVm = _mapper.Map<ThongTinKhoaHocViewModel>(khoaHoc);

                var chuongHocs = (await _chuongHocRepository.GetMultiByIdAsync(khoaHocVm.DanhSachChuongHoc));
                var chuongHocVms = _mapper.Map<List<ThongTinChuongHocViewModel>>(chuongHocs);
                
                foreach (ThongTinChuongHocViewModel chuongHoc in chuongHocVms)
                {
                    // Lấy danh sách bài học thuộc chương học ( Sử dụng danh sách id bài học lưu trong chương học)
                    var baiHocs = (await _baiHocRepository.GetMultiByIdAsync(chuongHoc.DanhSachBaiHoc));
                    List<BaiHocViewModel> baiHocVms = _mapper.Map<List<BaiHocViewModel>>(baiHocs);
                    chuongHoc.ThongTinBaiHoc = baiHocVms;
                }
                khoaHocVm.ThongTinChuongHoc = chuongHocVms;
                return new ResponseEntity(StatusCodeConstants.OK, khoaHocVm);
            }
            catch(Exception ex)
            {
                return new ResponseEntity(StatusCodeConstants.ERROR_SERVER, ex.Message);
            }
        }

        public async Task<ResponseEntity> SortingAsync(dynamic id, List<int> dsChuongHoc)
        {
            try
            {
                KhoaHoc khoaHoc = await _khoaHocRepository.GetSingleByIdAsync(id);
                if (khoaHoc == null)
                    return new ResponseEntity(StatusCodeConstants.NOT_FOUND);

                var khoaHocVm = _mapper.Map<KhoaHocViewModel>(khoaHoc);
                khoaHocVm.DanhSachChuongHoc = dsChuongHoc;

                khoaHoc = _mapper.Map<KhoaHoc>(khoaHocVm);

                await _khoaHocRepository.UpdateAsync(id, khoaHoc);
                return new ResponseEntity(StatusCodeConstants.OK, dsChuongHoc, MessageConstants.UPDATE_SUCCESS);
            }
            catch(Exception ex)
            {
                return new ResponseEntity(StatusCodeConstants.ERROR_SERVER, ex.Message);
            }
        }
    }
}