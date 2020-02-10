import * as types from '../types/chuongHocTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachChuongHocAction = () => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC
    }
}

export const layDanhSachChuongHocThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachChuongHocThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC_THAT_BAI,
        payload: {
            error
        }
    }
}

export const layDanhSachChuongHocPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachChuongHocPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachChuongHocPhanTrangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_CHUONG_HOC_PHAN_TRANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaChuongHocAction = (params) => {
    return {
        type: types.XOA_CHUONG_HOC,
        payload: {
            params
        }
    }
}

export const xoaChuongHocThanhCongAction = (id) => {
    return {
        type: types.XOA_CHUONG_HOC_THANH_CONG,
        payload: {
            id
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiChuongHocAction = (model) => {
    return {
        type: types.THEM_MOI_CHUONG_HOC,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatChuongHocAction = (id, model) => {
    return {
        type: types.CAP_NHAT_CHUONG_HOC,
        payload: {
            id,
            model
        }
    }
}

export const capNhatChuongHocThanhCongAction = (data) => {
    return {
        type: types.CAP_NHAT_CHUONG_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}