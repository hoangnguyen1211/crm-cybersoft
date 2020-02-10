import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/loTrinhTypes';
import * as actions from '../actions/loTrinhActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { LoTrinhSevice } from '../../services/LoTrinhService';

/*============== LẤY DANH SÁCH LỘ TRÌNH  ==============*/
function* layDanhSachLoTrinhSaga(action) {
    try {
        const { data } = yield call(() => LoTrinhSevice.layDanhSachLoTrinhService());
        yield put(actions.layDanhSachLoTrinhThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachLoTrinhThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachLoTrinh() { 
    yield takeLatest(types.LAY_DANH_SACH_LO_TRINH, layDanhSachLoTrinhSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layDanhSachLoTrinhPhanTrangSaga(action) {
    const { page, size } = action.payload;
    try {
        const { data } = yield call(() => LoTrinhSevice.layLoTrinhPhanTrangService(page, size));
        yield put(actions.layDanhSachLoTrinhPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachLoTrinhPhanTrangThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachLoTrinhPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_LO_TRINH_PHAN_TRANG, layDanhSachLoTrinhPhanTrangSaga);
}

/*============== THÊM MỚI LỘ TRÌNH  ==============*/
function* themMoiLoTrinhSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.loTrinhReducer);
    try {
        yield call(() => LoTrinhSevice.themMoiLoTrinhService(model));
        yield put(actions.layDanhSachLoTrinhPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiLoTrinh() { 
    yield takeLatest(types.THEM_MOI_LO_TRINH, themMoiLoTrinhSaga);
}

/*============== CẬP NHẬT LỘ TRÌNH  ==============*/
function* capNhatLoTrinhSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.loTrinhReducer);
    try {
        yield call(() => LoTrinhSevice.capNhatLoTrinhService(model));
        yield put(actions.layDanhSachLoTrinhPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatLoTrinh() { 
    yield takeLatest(types.CAP_NHAT_LO_TRINH, capNhatLoTrinhSaga);
}

/*============== XÓA LỘ TRÌNH  ==============*/
function* xoaLoTrinhSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.loTrinhReducer);
    try {
        yield call(() => LoTrinhSevice.xoaLoTrinhService(params));
        yield put(actions.layDanhSachLoTrinhPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaLoTrinh() { 
    yield takeLatest(types.XOA_LO_TRINH, xoaLoTrinhSaga);
}

/*============== CẬP NHẬT KHÓA HỌC CỦA LỘ TRÌNH ==============*/
function* capNhatKhoaHocCuaLoTrinhSaga(action) {
    const { id, model } = action.payload;
    try {
        const { data } = yield call(() => LoTrinhSevice.themKhoaVaoLoTrinhService(id, model));
        yield put(actions.capNhatDanhSachKhoaHocCuaLoTrinhThanhCongAction(id, data));
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
        yield put(formActions.dongFormAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    }
}

export function* theoDoiCapNhatKhoaHocCuaLoTrinhSaga() { 
    yield takeLatest(types.CAP_NHAT_DANH_SACH_KHOA_HOC_CUA_LO_TRINH, capNhatKhoaHocCuaLoTrinhSaga);
}

/*============== LẤY THÔNG TIN LỘ TRÌNH THEO ID ==============*/
function* layThongTinLoTrinhTheoIdSaga(action) {
    const { id } = action.payload;
    try {
        const { data } = yield call(() => LoTrinhSevice.layThongTinLoTrinhTheoIdService(id));
        yield put(actions.layThongTinLoTrinhTheoIdThanhCongAction(data));
    } catch (error) {
        console.log(error);
    }
}

export function* theoDoiLayThongTinLoTrinhTheoId() { 
    yield takeLatest(types.LAY_THONG_TIN_LO_TRINH_THEO_ID, layThongTinLoTrinhTheoIdSaga);
}

/*============== SẮP XẾP VỊ TRÍ KHOÁ HỌC ==============*/
function* sapXepViTriKhoaHocSaga(action) {
    const { id, model } = action.payload;
    try {
        yield call(() => LoTrinhSevice.sapXepViTriKhoaHocService(id, model));
        yield put(actions.sapXepViTriKhoaHocThanhCongAction(model));
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiSapXepViTriKhoaHoc() { 
    yield takeLatest(types.SAP_XEP_VI_TRI_KHOA_HOC, sapXepViTriKhoaHocSaga);
}