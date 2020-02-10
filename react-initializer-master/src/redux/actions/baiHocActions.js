import * as types from '../types/baiHocTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachBaiHocAction = () => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC
    }
}

export const layDanhSachBaiHocThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachBaiHocThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC_THAT_BAI,
        payload: {
            error
        }
    }
}

export const layDanhSachBaiHocPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachBaiHocPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachBaiHocPhanTrangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_BAI_HOC_PHAN_TRANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaBaiHocAction = (params) => {
    return {
        type: types.XOA_BAI_HOC,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiBaiHocAction = (model) => {
    return {
        type: types.THEM_MOI_BAI_HOC,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatBaiHocAction = (model) => {
    return {
        type: types.CAP_NHAT_BAI_HOC,
        payload: {
            model
        }
    }
}