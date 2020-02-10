import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/baiHocTypes';
import * as actions from '../actions/baiHocActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { BaiHocService } from '../../services/BaiHocService';
import * as quyenActions from '../actions/quyenActions';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachBaiHocgSaga(action) {
    try {
        const { data } = yield call(() => BaiHocService.layDanhSachBaiHocService());
        yield put(actions.layDanhSachBaiHocThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachBaiHocThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachBaiHoc() { 
    yield takeLatest(types.LAY_DANH_SACH_BAI_HOC, layDanhSachBaiHocgSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layBaiHocPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        yield put(quyenActions.layDanhSachQuyenAction());
        const { data } = yield call(() => BaiHocService.layBaiHocPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachBaiHocPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachBaiHocPhanTrangThatBaiAction(error));
    }
}

export function* theoDoiLayBaiHocPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_BAI_HOC_PHAN_TRANG, layBaiHocPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiBaiHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.baiHocReducer);
    try {
        yield call(() => BaiHocService.themMoiBaiHoc(model));
        yield put(actions.layDanhSachBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiBaiHoc() { 
    yield takeLatest(types.THEM_MOI_BAI_HOC, themMoiBaiHocSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatBaiHocSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.baiHocReducer);
    try {
        yield call(() => BaiHocService.capNhatBaiHoc(model));
        yield put(actions.layDanhSachBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatBaiHoc() { 
    yield takeLatest(types.CAP_NHAT_BAI_HOC, capNhatBaiHocSaga);
}

/*============== XÓA ==============*/
function* xoaBaiHocSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.baiHocReducer);
    try {
        yield call(() => BaiHocService.xoaBaiHoc(params));
        yield put(actions.layDanhSachBaiHocPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaBaiHoc() { 
    yield takeLatest(types.XOA_BAI_HOC, xoaBaiHocSaga);
}