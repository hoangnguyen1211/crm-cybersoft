import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/quyenTypes';
import * as actions from '../actions/quyenActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { QuyenService } from '../../services/QuyenService';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachQuyengSaga(action) {
    try {
        const { data } = yield call(() => QuyenService.layDanhSachQuyenService());
        yield put(actions.layDanhSachQuyenThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachQuyenThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachQuyen() { 
    yield takeLatest(types.LAY_DANH_SACH_QUYEN, layDanhSachQuyengSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layQuyenPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        const { data } = yield call(() => QuyenService.layQuyenPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachQuyenPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachQuyenThatBaiAction(error));
    }
}

export function* theoDoiLayQuyenPhanTrang() { 
    yield takeLatest(types.QUYEN_PHAN_TRANG, layQuyenPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiQuyenSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.quyenReducer);
    try {
        yield call(() => QuyenService.themMoiQuyen(model));
        yield put(actions.layDanhSachQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiQuyen() { 
    yield takeLatest(types.THEM_MOI_QUYEN, themMoiQuyenSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatQuyenSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.quyenReducer);
    try {
        yield call(() => QuyenService.capNhatQuyen(model));
        yield put(actions.layDanhSachQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatQuyen() { 
    yield takeLatest(types.CAP_NHAT_QUYEN, capNhatQuyenSaga);
}

/*============== XÓA ==============*/
function* xoaQuyenSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.quyenReducer);
    try {
        yield call(() => QuyenService.xoaQuyen(params));
        yield put(actions.layDanhSachQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaQuyen() { 
    yield takeLatest(types.XOA_QUYEN, xoaQuyenSaga);
}