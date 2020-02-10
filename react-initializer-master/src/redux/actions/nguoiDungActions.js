import * as types from '../types/nguoiDungTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachNguoiDungAction = () => {
    return {
        type: types.LAY_DANH_SACH_NGUOI_DUNG
    }
}

export const layDanhSachNguoiDungThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_NGUOI_DUNG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachNguoiDungPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachNguoiDungPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachNguoiDungThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_NGUOI_DUNG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaNguoiDungAction = (params) => {
    return {
        type: types.XOA_NGUOI_DUNG,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiNguoiDungAction = (model) => {
    return {
        type: types.THEM_MOI_NGUOI_DUNG,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatNguoiDungAction = (model) => {
    return {
        type: types.CAP_NHAT_NGUOI_DUNG,
        payload: {
            model
        }
    }
}