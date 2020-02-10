import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/khoaHocTypes';
import * as actions from '../actions/khoaHocActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { KhoaHocService } from '../../services/KhoaHocService';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachKhoaHocSaga(action) {
    try {
        const { data } = yield call(() => KhoaHocService.layDanhSachKhoaHocService());
        yield put(actions.layDanhSachKhoaHocThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachKhoaHocThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachKhoaHoc() { 
    yield takeLatest(types.LAY_DANH_SACH_KHOA_HOC, layDanhSachKhoaHocSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layDanhSachKhoaHocPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        const { data } = yield call(() => KhoaHocService.layKhoaHocPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachKhoaHocPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachKhoaHocPhanTrangThatBaiAction(error));
    }
}

export function* theoDoiLayKhoaHocPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG, layDanhSachKhoaHocPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiKhoaHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.khoaHocReducer);
    try {
        yield call(() => KhoaHocService.themMoiKhoaHocService(model));
        yield put(actions.layDanhSachKhoaHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiKhoaHoc() { 
    yield takeLatest(types.THEM_MOI_KHOA_HOC, themMoiKhoaHocSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatKhoaHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.khoaHocReducer);
    try {
        yield call(() => KhoaHocService.capNhatKhoaHocService(model));
        yield put(actions.layDanhSachKhoaHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatKhoaHoc() { 
    yield takeLatest(types.CAP_NHAT_KHOA_HOC, capNhatKhoaHocSaga);
}

/*============== XÓA ==============*/
function* xoaKhoaHocSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.khoaHocReducer);
    try {
        yield call(() => KhoaHocService.xoaKhoaHocService(params));
        yield put(actions.layDanhSachKhoaHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaKhoaHoc() { 
    yield takeLatest(types.XOA_KHOA_HOC, xoaKhoaHocSaga);
}

/*============== THÊM CHƯƠNG HỌC VÀO KHÓA HỌC ==============*/
function* themChuongHocVaoKhoaHocSaga(action) {
    const { id, model } = action.payload;
    try {
        const { data } = yield call(() => KhoaHocService.themChuongVaoKhoaHocService(id, model));
        yield put(actions.themChuongHocVaoKhoaHocThanhCongAction(id, data));
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
        yield put(formActions.dongFormAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemChuongHocVaoKhoaHoc() { 
    yield takeLatest(types.THEM_CHUONG_HOC_VAO_KHOA_HOC, themChuongHocVaoKhoaHocSaga);
}

/*============== LẤY THÔNG TIN KHÓA HỌC THEO ID ==============*/
function* layThongTinKhoaHocTheoIdSaga(action) {
    const { id } = action.payload;
    try {
        const { data } = yield call(() => KhoaHocService.layThongTinKhoaHocTheoIdService(id));
        yield put(actions.layThongTinKhoaHocTheoIdThanhCongAction(data));
    } catch (error) {
        console.log(error);
    }
}

export function* theoDoiLayThongTinKhoaHocTheoId() { 
    yield takeLatest(types.LAY_THONG_TIN_KHOA_HOC_THEO_ID, layThongTinKhoaHocTheoIdSaga);
}

/*============== SẮP XẾP VỊ TRÍ CHƯƠNG HỌC ==============*/
function* sapXepViTriChuongHocSaga(action) {
    const { id, model } = action.payload;
    try {
        yield call(() => KhoaHocService.sapXepViTriChuongHocService(id, model));
        yield put(actions.sapXepViTriChuongHocThanhCongAction(model));
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiSapXepViTriChuongHoc() { 
    yield takeLatest(types.SAP_XEP_VI_TRI_CHUONG_HOC, sapXepViTriChuongHocSaga);
}