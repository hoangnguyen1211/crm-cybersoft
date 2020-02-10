import * as types from '../types/lopHocTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachLopHocPhanTrangAction = (page, size, keywords = '') => {
    return {
        type: types.LOP_HOC_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachLopHocThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_LOP_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachLopHocThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_LOP_HOC_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaLopHocAction = (params) => {
    return {
        type: types.XOA_LOP_HOC,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiLopHocAction = (model) => {
    return {
        type: types.THEM_MOI_LOP_HOC,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatLopHocAction = (model) => {
    return {
        type: types.CAP_NHAT_LOP_HOC,
        payload: {
            model
        }
    }
}