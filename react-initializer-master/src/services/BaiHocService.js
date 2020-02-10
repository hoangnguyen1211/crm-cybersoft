import { BaseApi } from './BaseService';

const API_URL = "/api/baihoc"; 

const layDanhSachBaiHocService = () => {
    return BaseApi.get(API_URL);
}

const layBaiHocPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiBaiHoc = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatBaiHoc = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaBaiHoc = (params) => {
    return BaseApi.remove(API_URL, params);
}

export const BaiHocService = {
    layDanhSachBaiHocService,
    layBaiHocPhanTrangService,
    themMoiBaiHoc,
    capNhatBaiHoc,
    xoaBaiHoc
}