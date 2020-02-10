import { BaseApi } from './BaseService';

const API_URL = "/api/khoahoc";

const layKhoaHocPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiKhoaHocService = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatKhoaHocService = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaKhoaHocService = (params) => {
    return BaseApi.remove(API_URL, params);
}

const layDanhSachKhoaHocService = () => {
    return BaseApi.get(API_URL);
}

const themChuongVaoKhoaHocService = (id, model) => {
    return BaseApi.put(`${API_URL}/chapter/${id}`, model);
}

const layThongTinKhoaHocTheoIdService = (id) => {
    return BaseApi.get(`${API_URL}/${id}`);
}

const sapXepViTriChuongHocService = (id, model) => {
    return BaseApi.put(`${API_URL}/sorting/${id}`, model);
}

export const KhoaHocService = {
    layKhoaHocPhanTrangService,
    themMoiKhoaHocService,
    capNhatKhoaHocService,
    xoaKhoaHocService,
    layDanhSachKhoaHocService,
    themChuongVaoKhoaHocService,
    layThongTinKhoaHocTheoIdService,
    sapXepViTriChuongHocService
}