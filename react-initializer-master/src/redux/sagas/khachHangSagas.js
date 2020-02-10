import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/KhachHangTypes';
import * as actions from '../actions/KhachHangActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { KhachHangSevice } from '../../services/KhachHangService';

/*============== LẤY PHÂN TRANG  ==============*/
function* layKhachHangPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        const { data } = yield call(() => KhachHangSevice.layKhachHangPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachKhachHangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachKhachHangThatBaiAction(error));
    }
}

export function* theoDoiLayKhachHangPhanTrang() { 
    yield takeLatest(types.KHACH_HANG_PHAN_TRANG, layKhachHangPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiKhachHangSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.khachHangReducer);
    try {
        yield call(() => KhachHangSevice.themMoiKhachHang(model));
        yield put(actions.layDanhSachKhachHangPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiKhachHang() { 
    yield takeLatest(types.THEM_MOI_KHACH_HANG, themMoiKhachHangSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatKhachHangSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.khachHangReducer);
    try {
        yield call(() => KhachHangSevice.capNhatKhachHang(model));
        yield put(actions.layDanhSachKhachHangPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatKhachHang() { 
    yield takeLatest(types.CAP_NHAT_KHACH_HANG, capNhatKhachHangSaga);
}

/*============== XÓA ==============*/
function* xoaKhachHangSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.khachHangReducer);
    try {
        yield call(() => KhachHangSevice.xoaKhachHang(params));
        yield put(actions.layDanhSachKhachHangPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaKhachHang() { 
    yield takeLatest(types.XOA_KHACH_HANG, xoaKhachHangSaga);
}

/*============== GHI DANH ==============*/
function* ghiDanhKhachHangVaoLopHocSaga(action) {
    const { id, model } = action.payload;
    try {
        yield call(() => KhachHangSevice.ghiDanhKhachHangVaoLopHoc(id, model));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error);
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoighiDanhKhachHang() { 
    yield takeLatest(types.KHACH_HANG_GHI_DANH_LOP_HOC, ghiDanhKhachHangVaoLopHocSaga);
}