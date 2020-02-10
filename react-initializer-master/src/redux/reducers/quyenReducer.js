import * as types from "../types/quyenTypes";

const initialState = {
    data: [],
    pageIndex: 0,
    pageSize: 0,
    totalRow: 0,
    status: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_QUYEN_THANH_CONG:
            return {
                ...state,
                data: action.payload.data.content ? action.payload.data.content : [],
            }
        case types.LAY_DANH_SACH_QUYEN_PHAN_TRANG_THANH_CONG:
            const { data } = action.payload;
            return {
                ...state,
                data: data.content.items ? data.content.items : [],
                pageIndex: data.content.pageIndex,
                pageSize: data.content.pageSize,
                totalRow: data.content.totalRow,
                status: false
            }
        default:
            return state
    }
}