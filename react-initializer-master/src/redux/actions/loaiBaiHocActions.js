import * as types from '../types/loaiBaiHocTypes';

/*=========== LẤY DỮ LIỆU ===========*/
export const layDanhSachLoaiBaiHocAction = () => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC
    }
}

export const layDanhSachLoaiBaiHocThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachLoaiBaiHocThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC_THAT_BAI,
        payload: {
            error
        }
    }
}

export const layDanhSachLoaiBaiHocPhanTrangAction = (page, size, keywords = "") => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC_PHAN_TRANG,
        payload: {
            page,
            size,
            keywords
        }
    }
}

export const layDanhSachLoaiBaiHocPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachLoaiBaiHocPhanTrangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_LOAI_BAI_HOC_PHAN_TRANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaLoaiBaiHocAction = (params) => {
    return {
        type: types.XOA_LOAI_BAI_HOC,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiLoaiBaiHocAction = (model) => {
    return {
        type: types.THEM_MOI_LOAI_BAI_HOC,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatLoaiBaiHocAction = (model) => {
    return {
        type: types.CAP_NHAT_LOAI_BAI_HOC,
        payload: {
            model
        }
    }
}