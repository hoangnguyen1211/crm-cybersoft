import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/loaiBaiHocTypes';
import * as actions from '../actions/loaiBaiHocActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { LoaiBaiHocService } from '../../services/LoaiBaiHocService';
import * as quyenActions from '../actions/quyenActions';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachLoaiBaiHocgSaga(action) {
    try {
        const { data } = yield call(() => LoaiBaiHocService.layDanhSachLoaiBaiHocService());
        yield put(actions.layDanhSachLoaiBaiHocThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachLoaiBaiHocThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachLoaiBaiHoc() { 
    yield takeLatest(types.LAY_DANH_SACH_LOAI_BAI_HOC, layDanhSachLoaiBaiHocgSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layLoaiBaiHocPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        yield put(quyenActions.layDanhSachQuyenAction());
        const { data } = yield call(() => LoaiBaiHocService.layLoaiBaiHocPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachLoaiBaiHocPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachLoaiBaiHocPhanTrangThatBaiAction(error));
    }
}

export function* theoDoiLayLoaiBaiHocPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_LOAI_BAI_HOC_PHAN_TRANG, layLoaiBaiHocPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiLoaiBaiHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.loaiBaiHocReducer);
    try {
        yield call(() => LoaiBaiHocService.themMoiLoaiBaiHoc(model));
        yield put(actions.layDanhSachLoaiBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiLoaiBaiHoc() { 
    yield takeLatest(types.THEM_MOI_LOAI_BAI_HOC, themMoiLoaiBaiHocSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatLoaiBaiHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.loaiBaiHocReducer);
    try {
        yield call(() => LoaiBaiHocService.capNhatLoaiBaiHoc(model));
        yield put(actions.layDanhSachLoaiBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatLoaiBaiHoc() { 
    yield takeLatest(types.CAP_NHAT_LOAI_BAI_HOC, capNhatLoaiBaiHocSaga);
}

/*============== XÓA ==============*/
function* xoaLoaiBaiHocSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.loaiBaiHocReducer);
    try {
        yield call(() => LoaiBaiHocService.xoaLoaiBaiHoc(params));
        yield put(actions.layDanhSachLoaiBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaLoaiBaiHoc() { 
    yield takeLatest(types.XOA_LOAI_BAI_HOC, xoaLoaiBaiHocSaga);
}