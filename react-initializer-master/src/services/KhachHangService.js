import { BaseApi } from './BaseService';

const API_URL = "/api/khachhang";

const layDanhSachKhachHangService = () => {
    return BaseApi.get(API_URL);
}

const layKhachHangPhanTrangService = (page, size, keywords) => {
    console.log(keywords)
    return BaseApi.get(`${API_URL}/paging?page=${page}&size=${size}&keywords=${keywords}`);
}

const themMoiKhachHang = (model) => {
    return BaseApi.post(API_URL, model);
}

const capNhatKhachHang = (model) => {
    return BaseApi.put(`${API_URL}/${model.id}`, model);
}

const xoaKhachHang = (params) => {
    return BaseApi.remove(API_URL, params);
}

const ghiDanhKhachHangVaoLopHoc = (id, model) => {
    return BaseApi.put(`${API_URL}/register/${id}`, model);
}

export const KhachHangSevice = {
    layDanhSachKhachHangService,
    layKhachHangPhanTrangService,
    themMoiKhachHang,
    capNhatKhachHang,
    xoaKhachHang,
    ghiDanhKhachHangVaoLopHoc
}