import { BaseApi } from './BaseService';

const API_URL = "/api/lotrinh"; 

const layDanhSachLoTrinhService = () => {
    return BaseApi.get(API_URL);
}

const layLoTrinhPhanTrangService = (page, size) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}`);
}

const themMoiLoTrinhService = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatLoTrinhService = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaLoTrinhService = (params) => {
    return BaseApi.remove(API_URL, params);
}

const themKhoaVaoLoTrinhService = (id, model) => {
    return BaseApi.put(`${API_URL}/course/${id}`, model);
}

const layThongTinLoTrinhTheoIdService = (id) => {
    return BaseApi.get(`${API_URL}/${id}`);
}

const sapXepViTriKhoaHocService = (id, model) => {
    return BaseApi.put(`${API_URL}/sorting/${id}`, model);
}

export const LoTrinhSevice = {
    layDanhSachLoTrinhService,
    layLoTrinhPhanTrangService,
    themMoiLoTrinhService,
    capNhatLoTrinhService,
    xoaLoTrinhService,
    themKhoaVaoLoTrinhService,
    layThongTinLoTrinhTheoIdService,
    sapXepViTriKhoaHocService
}