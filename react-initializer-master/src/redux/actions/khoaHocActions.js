import * as types from '../types/khoaHocTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachKhoaHocAction = () => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC
    }
}

export const layDanhSachKhoaHocThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachKhoaHocThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== LẤY DỮ LIỆU PHÂN TRANG ===========*/
export const layDanhSachKhoaHocPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachKhoaHocPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachKhoaHocPhanTrangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaKhoaHocAction = (params) => {
    return {
        type: types.XOA_KHOA_HOC,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiKhoaHocAction = (model) => {
    return {
        type: types.THEM_MOI_KHOA_HOC,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatKhoaHocAction = (model) => {
    return {
        type: types.CAP_NHAT_KHOA_HOC,
        payload: {
            model
        }
    }
}

/*=========== THÊM CHƯƠNG HỌC VÀO KHÓA HỌC ===========*/
export const themChuongHocVaoKhoaHocAction = (id, model) => {
    return {
        type: types.THEM_CHUONG_HOC_VAO_KHOA_HOC,
        payload: {
            id,
            model
        }
    }
}

export const themChuongHocVaoKhoaHocThanhCongAction = (id, data) => {
    return {
        type: types.THEM_CHUONG_HOC_VAO_KHOA_HOC_THANH_CONG,
        payload: {
            id,
            data
        }
    }
}

/*=========== LẤY THÔNG TIN KHÓA HỌC THEO ID ===========*/
export const layThongTinKhoaHocTheoIdAction = (id) => {
    return {
        type: types.LAY_THONG_TIN_KHOA_HOC_THEO_ID,
        payload: {
            id
        }
    }
}

export const layThongTinKhoaHocTheoIdThanhCongAction = (data) => {
    return {
        type: types.LAY_THONG_TIN_KHOA_HOC_THEO_ID_THANH_CONG,
        payload: {
            data
        }
    }
}

/*=========== SẮP XẾP VỊ TRÍ CHƯƠNG HỌC ===========*/
export const sapXepViTriChuongHocAction = (id, model) => {
    return {
        type: types.SAP_XEP_VI_TRI_CHUONG_HOC,
        payload: {
            id,
            model
        }
    }
}

export const sapXepViTriChuongHocThanhCongAction = (data) => {
    return {
        type: types.SAP_XEP_VI_TRI_CHUONG_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}