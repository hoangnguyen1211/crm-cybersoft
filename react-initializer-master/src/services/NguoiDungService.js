import { BaseApi } from './BaseService';

const API_URL = "/api/nguoidung"; 

const layDanhSachNguoiDungService = () => {
    return BaseApi.get(API_URL);
}

const layNguoiDungPhanTrangService = (page, size, keywords) => {
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiNguoiDungService = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatNguoiDungService = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaNguoiDungService = (ids) => {
    return BaseApi.remove(API_URL, ids);
}

const layDanhSachNguoiDungTheoDieuKienService = (column, values) => {
    values = JSON.stringify(values);
    return BaseApi.get(`${API_URL}/${column}/${values}`);
}

export const NguoiDungService = {
    layDanhSachNguoiDungService,
    layNguoiDungPhanTrangService,
    themMoiNguoiDungService,
    capNhatNguoiDungService,
    xoaNguoiDungService,
    layDanhSachNguoiDungTheoDieuKienService
}