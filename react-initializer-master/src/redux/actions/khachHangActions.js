import * as types from '../types/khachHangTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachKhachHangPhanTrangAction = (page, size, keywords = '') => {
    return {
        type: types.KHACH_HANG_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachKhachHangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_KHACH_HANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachKhachHangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_KHACH_HANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaKhachHangAction = (params) => {
    return {
        type: types.XOA_KHACH_HANG,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiKhachHangAction = (model) => {
    return {
        type: types.THEM_MOI_KHACH_HANG,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatKhachHangAction = (model) => {
    return {
        type: types.CAP_NHAT_KHACH_HANG,
        payload: {
            model
        }
    }
}

/*=========== GHI DANH LỚP HỌC ===========*/
export const khachHangGhiDanhLopHocAction = (id, model) => {
    return {
        type: types.KHACH_HANG_GHI_DANH_LOP_HOC,
        payload: {
            id,
            model
        }
    }
}