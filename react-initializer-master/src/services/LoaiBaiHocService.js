import { BaseApi } from './BaseService';

const API_URL = "/api/loaibaihoc"; 

const layDanhSachLoaiBaiHocService = () => {
    return BaseApi.get(API_URL);
}

const layLoaiBaiHocPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiLoaiBaiHoc = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatLoaiBaiHoc = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaLoaiBaiHoc = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const LoaiBaiHocService = {
    layDanhSachLoaiBaiHocService,
    layLoaiBaiHocPhanTrangService,
    themMoiLoaiBaiHoc,
    capNhatLoaiBaiHoc,
    xoaLoaiBaiHoc
}