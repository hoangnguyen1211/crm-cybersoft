import { BaseApi } from './BaseService';

const API_URL = "/api/lophoc";

const layDanhSachLopHocService = () => {
    return BaseApi.get(API_URL);
}

const layLopHocPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiLopHoc = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatLopHoc = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaLopHoc = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const LopHocSevice = {
    layDanhSachLopHocService,
    layLopHocPhanTrangService,
    themMoiLopHoc,
    capNhatLopHoc,
    xoaLopHoc
}