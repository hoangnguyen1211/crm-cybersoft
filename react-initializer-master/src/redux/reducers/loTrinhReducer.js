import * as types from "../types/loTrinhTypes";

const initialState = {
    data: [],
    pageIndex: 0,
    pageSize: 0,
    totalRow: 0,
    status: false,
    current: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LAY_DANH_SACH_LO_TRINH_THANH_CONG:
            return {
                ...state,
                data: action.payload.data.content ? action.payload.data.content : [],
            }
        case types.LAY_DANH_SACH_LO_TRINH_PHAN_TRANG_THANH_CONG:
            const { data } = action.payload;
            return {
                ...state,
                data: data.content.items ? data.content.items : [],
                pageIndex: data.content.pageIndex,
                pageSize: data.content.pageSize,
                totalRow: data.content.totalRow,
                status: false
            }
        case types.LAY_THONG_TIN_LO_TRINH_THEO_ID_THANH_CONG:
            const loTrinh = action.payload.data.content;
            const result = loTrinh.danhSachKhoaHoc.map(item => {
                const temp = loTrinh.thongTinKhoaHoc.find(x => x.id === item);
                return { ...temp };
            });
            return {
                ...state,
                current: { ...loTrinh, thongTinKhoaHoc: result }
            }
        case types.CAP_NHAT_DANH_SACH_KHOA_HOC_CUA_LO_TRINH_THANH_CONG:
            return {
                ...state,
                current: action.payload.data.content
            }
        case types.SAP_XEP_VI_TRI_KHOA_HOC_THANH_CONG:
            const dsMaKhoaHoc = action.payload.data;
            return {
                ...state,
                current: {
                    ...state.current,
                    thongTinKhoaHoc: dsMaKhoaHoc.map(item => {
                        const temp = state.current.thongTinKhoaHoc.find(x => x.id === item);
                        return { ...temp };
                    })
                }
            }
        default:
            return state
    }
}