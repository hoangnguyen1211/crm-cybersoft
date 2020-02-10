import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/nguoiDungTypes';
import * as actions from '../actions/nguoiDungActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import * as nhomQuyenActions from '../actions/nhomQuyenActions';
import { NguoiDungService } from '../../services/NguoiDungService';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachNguoiDunggSaga(action) {
    try {
        const { data } = yield call(() => NguoiDungService.layDanhSachNguoiDungService());
        yield put(actions.layDanhSachNguoiDungThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachNguoiDungThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachNguoiDung() { 
    yield takeLatest(types.LAY_DANH_SACH_NGUOI_DUNG, layDanhSachNguoiDunggSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layNguoiDungPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        yield put(nhomQuyenActions.layDanhSachNhomQuyenAction());
        const { data } = yield call(() => NguoiDungService.layNguoiDungPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachNguoiDungPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachNguoiDungThatBaiAction(error));
    }
}

export function* theoDoiLayNguoiDungPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG, layNguoiDungPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiNguoiDungSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.nguoiDungReducer);
    try {
        yield call(() => NguoiDungService.themMoiNguoiDungService(model));
        yield put(actions.layDanhSachNguoiDungPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiNguoiDung() { 
    yield takeLatest(types.THEM_MOI_NGUOI_DUNG, themMoiNguoiDungSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatNguoiDungSaga(action) {
    const { model } = action.payload;
    const state = yield select(state => state.nguoiDungReducer);
    try {
        yield call(() => NguoiDungService.capNhatNguoiDungService(model));
        yield put(actions.layDanhSachNguoiDungPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatNguoiDung() { 
    yield takeLatest(types.CAP_NHAT_NGUOI_DUNG, capNhatNguoiDungSaga);
}

/*============== XÓA ==============*/
function* xoaNguoiDungSaga(action) {
    const { params } = action.payload;
    const state = yield select(state => state.nguoiDungReducer);
    try {
        yield call(() => NguoiDungService.xoaNguoiDungService(params));
        yield put(actions.layDanhSachNguoiDungPhanTrangAction(state.pageIndex, state.pageSize));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaNguoiDung() { 
    yield takeLatest(types.XOA_NGUOI_DUNG, xoaNguoiDungSaga);
}