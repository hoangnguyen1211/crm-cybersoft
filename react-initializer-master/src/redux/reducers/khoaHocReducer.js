import * as types from "../types/khoaHocTypes";
import * as chuongHocTypes from "../types/chuongHocTypes";

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
        case types.LAY_DANH_SACH_KHOA_HOC_THANH_CONG:
            return {
                ...state,
                data: action.payload.data.content ? action.payload.data.content : [],
            }
        case types.LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG_THANH_CONG:
            const { data } = action.payload;
            return {
                ...state,
                data: data.content.items ? data.content.items : [],
                pageIndex: data.content.pageIndex,
                pageSize: data.content.pageSize,
                totalRow: data.content.totalRow,
                status: false
            }
        case types.LAY_THONG_TIN_KHOA_HOC_THEO_ID_THANH_CONG:
            const khoaHoc = action.payload.data.content;
            const result = khoaHoc.danhSachChuongHoc.map(item => {
                const temp = khoaHoc.thongTinChuongHoc.find(x => x.id === item);
                return { ...temp };
            });

            return {
                ...state,
                current: { ...khoaHoc, thongTinChuongHoc: result }
            }
        case types.THEM_CHUONG_HOC_VAO_KHOA_HOC_THANH_CONG:
            return {
                ...state,
                current: {
                    ...state.current,
                    thongTinChuongHoc: [
                        ...state.current.thongTinChuongHoc,
                        action.payload.data.content
                    ]
                }
            }
        case types.SAP_XEP_VI_TRI_CHUONG_HOC_THANH_CONG:
            const dsMaChuongHoc = action.payload.data;
            return {
                ...state,
                current: {
                    ...state.current,
                    thongTinChuongHoc: dsMaChuongHoc.map(item => {
                        const temp = state.current.thongTinChuongHoc.find(x => x.id === item);
                        return { ...temp };
                    })
                }
            }
        case chuongHocTypes.CAP_NHAT_CHUONG_HOC_THANH_CONG:
            const chuongHoc = action.payload.data.content;
            return {
                ...state,
                current: {
                    ...state.current,
                    thongTinChuongHoc: state.current.thongTinChuongHoc.map(item => {
                        if (item.id === chuongHoc.id)
                            return { ...item, tenChuong: chuongHoc.tenChuong };
                        return item;
                    })
                }
            }
        case chuongHocTypes.XOA_CHUONG_HOC_THANH_CONG:
            const { id } = action.payload;
            return {
                ...state,
                current: {
                    ...state.current,
                    thongTinChuongHoc: state.current.thongTinChuongHoc.filter(item => item.id !== id)
                }
            }
        default:
            return state
    }
}