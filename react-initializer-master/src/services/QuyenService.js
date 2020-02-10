import { BaseApi } from './BaseService';

const API_URL = "/api/quyen"; 

const layDanhSachQuyenService = () => {
    return BaseApi.get(API_URL);
}

const layQuyenPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiQuyen = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatQuyen = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaQuyen = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const QuyenService = {
    layDanhSachQuyenService,
    layQuyenPhanTrangService,
    themMoiQuyen,
    capNhatQuyen,
    xoaQuyen
}