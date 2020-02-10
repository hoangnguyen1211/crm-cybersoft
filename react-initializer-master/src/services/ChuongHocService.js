import { BaseApi } from './BaseService';

const API_URL = "/api/chuonghoc"; 

const layDanhSachChuongHocService = () => {
    return BaseApi.get(API_URL);
}

const layChuongHocPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiChuongHocService = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatChuongHocService = (id, model) => {
    return BaseApi.put(`${API_URL}/${id}`, model);
}

const xoaChuongHocService = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const ChuongHocService = {
    layDanhSachChuongHocService,
    layChuongHocPhanTrangService,
    themMoiChuongHocService,
    capNhatChuongHocService,
    xoaChuongHocService
}