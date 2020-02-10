import * as types from '../types/loTrinhTypes';

/*=========== LẤY TẤT CẢ DỮ LIỆU ===========*/
export const layDanhSachLoTrinhAction = (page, size) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH,
        payload: {
            page,
            size
        }
    }
}

export const layDanhSachLoTrinhThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachLoTrinhThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== LẤY DỮ LIỆU PHÂN TRANG ===========*/
export const layDanhSachLoTrinhPhanTrangAction = (page, size) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH_PHAN_TRANG,
        payload: {
            page,
            size
        }
    }
}

export const layDanhSachLoTrinhPhanTrangThanhCongAction = (data) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH_PHAN_TRANG_THANH_CONG,
        payload: {
            data
        }
    }
}

export const layDanhSachLoTrinhPhanTrangThatBaiAction = (error) => {
    return {
        type: types.LAY_DANH_SACH_LO_TRINH_PHAN_TRANG_THAT_BAI,
        payload: {
            error
        }
    }
}

/*=========== XÓA DỮ LIỆU ===========*/
export const xoaLoTrinhAction = (params) => {
    return {
        type: types.XOA_LO_TRINH,
        payload: {
            params
        }
    }
}

/*=========== THÊM MỚI DỮ LIỆU ===========*/
export const themMoiLoTrinhAction = (model) => {
    return {
        type: types.THEM_MOI_LO_TRINH,
        payload: {
            model
        }
    }
}

/*=========== CẬP NHẬT DỮ LIỆU ===========*/
export const capNhatLoTrinhAction = (model) => {
    return {
        type: types.CAP_NHAT_LO_TRINH,
        payload: {
            model
        }
    }
}

/*=========== THÊM KHÓA HỌC VÀO LỘ TRÌNH ===========*/
export const capNhatDanhSachKhoaHocCuaLoTrinhAction = (id, model) => {
    return {
        type: types.CAP_NHAT_DANH_SACH_KHOA_HOC_CUA_LO_TRINH,
        payload: {
            id,
            model
        }
    }
}

export const capNhatDanhSachKhoaHocCuaLoTrinhThanhCongAction = (id, data) => {
    return {
        type: types.CAP_NHAT_DANH_SACH_KHOA_HOC_CUA_LO_TRINH_THANH_CONG,
        payload: {
            id,
            data
        }
    }
}

/*=========== LẤY THÔNG TIN LỘ TRÌNH THEO ID ===========*/
export const layThongTinLoTrinhTheoIdAction = (id) => {
    return {
        type: types.LAY_THONG_TIN_LO_TRINH_THEO_ID,
        payload: {
            id
        }
    }
}

export const layThongTinLoTrinhTheoIdThanhCongAction = (data) => {
    return {
        type: types.LAY_THONG_TIN_LO_TRINH_THEO_ID_THANH_CONG,
        payload: {
            data
        }
    }
}

/*=========== SẮP XẾP VỊ TRÍ KHÓA HỌC ===========*/
export const sapXepViTriKhoaHocAction = (id, model) => {
    return {
        type: types.SAP_XEP_VI_TRI_KHOA_HOC,
        payload: {
            id,
            model
        }
    }
}

export const sapXepViTriKhoaHocThanhCongAction = (data) => {
    return {
        type: types.SAP_XEP_VI_TRI_KHOA_HOC_THANH_CONG,
        payload: {
            data
        }
    }
}