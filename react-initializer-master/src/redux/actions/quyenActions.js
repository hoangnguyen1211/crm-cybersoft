import * as types from '../types/QuyenTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachQuyenAction = () => {
    return {
        type: types.LAY_DANH_SACH_QUYEN
    }
}

export const layDanhSachQuyenThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_QUYEN_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachQuyenPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.QUYEN_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachQuyenPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_QUYEN_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachQuyenThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_QUYEN_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaQuyenAction = (params) => {
    return {
        type: types.XOA_QUYEN,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiQuyenAction = (model) => {
    return {
        type: types.THEM_MOI_QUYEN,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatQuyenAction = (model) => {
    return {
        type: types.CAP_NHAT_QUYEN,
        payload: {
            model
        }
    }
}