import * as types from '../types/nhomQuyenTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachNhomQuyenAction = () => {
    return {
        type: types.LAY_DANH_SACH_NHOM_QUYEN
    }
}

export const layDanhSachNhomQuyenThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_NHOM_QUYEN_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachNhomQuyenPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_NHOM_QUYEN_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachNhomQuyenPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_NHOM_QUYEN_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachNhomQuyenThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_NHOM_QUYEN_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaNhomQuyenAction = (params) => {
    return {
        type: types.XOA_NHOM_QUYEN,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiNhomQuyenAction = (model) => {
    return {
        type: types.THEM_MOI_NHOM_QUYEN,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatNhomQuyenAction = (model) => {
    return {
        type: types.CAP_NHAT_NHOM_QUYEN,
        payload: {
            model
        }
    }
}