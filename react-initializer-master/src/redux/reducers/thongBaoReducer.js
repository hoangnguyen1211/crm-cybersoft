import * as types from "../types/thongBaoTypes";

const initialState = {
    type: '',
    title: '',
    message: '',
    status: false
}

export default (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.THONG_BAO_THEM_MOI_THANH_CONG:
        case types.THONG_BAO_CAP_NHAT_THANH_CONG:
        case types.THONG_BAO_XOA_THANH_CONG:
            return {
                ...state,
                type: 'success',
                title: payload.title,
                message: payload.message,
                status: true
            }
        case types.THONG_BAO_THEM_MOI_THAT_BAI:
        case types.THONG_BAO_CAP_NHAT_THAT_BAI:
        case types.THONG_BAO_XOA_THAT_BAI:
            return {
                ...state,
                type: 'error',
                title: payload.title,
                message: payload.message,
                status: true
            }
        default:
            return state
    }
}