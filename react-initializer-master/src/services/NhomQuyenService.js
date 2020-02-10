import { BaseApi } from './BaseService';

const API_URL = "/api/nhomquyen"; 

const layDanhSachNhomQuyenService = () => {
    return BaseApi.get(API_URL);
}

const layNhomQuyenPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiNhomQuyen = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatNhomQuyen = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaNhomQuyen = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const NhomQuyenService = {
    layDanhSachNhomQuyenService,
    layNhomQuyenPhanTrangService,
    themMoiNhomQuyen,
    capNhatNhomQuyen,
    xoaNhomQuyen
}