import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/LopHocTypes';
import * as actions from '../actions/LopHocActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { LopHocSevice } from '../../services/LopHocService';

/*============== LẤY PHÂN TRANG  ==============*/
function* layLopHocPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        const { data } = yield call(() => LopHocSevice.layLopHocPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachLopHocThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachLopHocThatBaiAction(error));
    }
}

export function* theoDoiLayLopHocPhanTrang() { 
    yield takeLatest(types.LOP_HOC_PHAN_TRANG, layLopHocPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiLopHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.lopHocReducer);
    try {
        yield call(() => LopHocSevice.themMoiLopHoc(model));
        yield put(actions.layDanhSachLopHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiLopHoc() { 
    yield takeLatest(types.THEM_MOI_LOP_HOC, themMoiLopHocSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatLopHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.lopHocReducer);
    try {
        yield call(() => LopHocSevice.capNhatLopHoc(model));
        yield put(actions.layDanhSachLopHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatLopHoc() { 
    yield takeLatest(types.CAP_NHAT_LOP_HOC, capNhatLopHocSaga);
}

/*============== XÓA ==============*/
function* xoaLopHocSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.lopHocReducer);
    try {
        yield call(() => LopHocSevice.xoaLopHoc(params));
        yield put(actions.layDanhSachLopHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaLopHoc() { 
    yield takeLatest(types.XOA_LOP_HOC, xoaLopHocSaga);
}