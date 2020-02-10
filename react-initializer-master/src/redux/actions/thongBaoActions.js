import * as types from '../types/thongBaoTypes';
import * as messages from '../../configs/MessageConfig';

// ========== THÊM MỚI =========== 
export const thongBaoThemMoiThanhCongAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_THEM_MOI_THANH_CONG,
        payload: {
            message: messages.TIN_NHAN_THEM_THANH_CONG,
            title
        }
    }
}

export const thongBaoThemMoiThatBaiAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_THEM_MOI_THAT_BAI,
        payload: {
            message: messages.TIN_NHAN_THEM_THAT_BAI,
            title
        }
    }
}

// ========== CẬP NHẬT =========== 
export const thongBaoCapNhatThanhCongAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_CAP_NHAT_THANH_CONG,
        payload: {
            message: messages.TIN_NHAN_SUA_THANH_CONG,
            title
        }
    }
}

export const thongBaoCapNhatThatBaiAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_CAP_NHAT_THAT_BAI,
        payload: {
            message: messages.TIN_NHAN_SUA_THAT_BAI,
            title
        }
    }
}

// ========== XÓA =========== 
export const thongBaoXoaThanhCongAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_XOA_THANH_CONG,
        payload: {
            message: messages.TIN_NHAN_XOA_THANH_CONG,
            title
        }
    }
}

export const thongBaoXoaThatBaiAction = (title = "Thông báo") => {
    return {
        type: types.THONG_BAO_XOA_THAT_BAI,
        payload: {
            message: messages.TIN_NHAN_XOA_THAT_BAI,
            title
        }
    }
}