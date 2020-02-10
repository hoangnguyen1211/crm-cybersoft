import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/nhomQuyenTypes';
import * as actions from '../actions/nhomQuyenActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { NhomQuyenService } from '../../services/NhomQuyenService';
import * as quyenActions from '../actions/quyenActions';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachNhomQuyengSaga(action) {
    try {
        const { data } = yield call(() => NhomQuyenService.layDanhSachNhomQuyenService());
        yield put(actions.layDanhSachNhomQuyenThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachNhomQuyenThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachNhomQuyen() { 
    yield takeLatest(types.LAY_DANH_SACH_NHOM_QUYEN, layDanhSachNhomQuyengSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layNhomQuyenPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        yield put(quyenActions.layDanhSachQuyenAction());
        const { data } = yield call(() => NhomQuyenService.layNhomQuyenPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachNhomQuyenPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachNhomQuyenThatBaiAction(error));
    }
}

export function* theoDoiLayNhomQuyenPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_NHOM_QUYEN_PHAN_TRANG, layNhomQuyenPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiNhomQuyenSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.nhomQuyenReducer);
    try {
        yield call(() => NhomQuyenService.themMoiNhomQuyen(model));
        yield put(actions.layDanhSachNhomQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiNhomQuyen() { 
    yield takeLatest(types.THEM_MOI_NHOM_QUYEN, themMoiNhomQuyenSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatNhomQuyenSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.nhomQuyenReducer);
    try {
        yield call(() => NhomQuyenService.capNhatNhomQuyen(model));
        yield put(actions.layDanhSachNhomQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatNhomQuyen() { 
    yield takeLatest(types.CAP_NHAT_NHOM_QUYEN, capNhatNhomQuyenSaga);
}

/*============== XÓA ==============*/
function* xoaNhomQuyenSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.nhomQuyenReducer);
    try {
        yield call(() => NhomQuyenService.xoaNhomQuyen(params));
        yield put(actions.layDanhSachNhomQuyenPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaNhomQuyen() { 
    yield takeLatest(types.XOA_NHOM_QUYEN, xoaNhomQuyenSaga);
}