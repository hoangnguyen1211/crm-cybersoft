import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as types from '../types/chuongHocTypes';
import * as actions from '../actions/chuongHocActions';
import * as tbActions from '../actions/thongBaoActions';
import * as formActions from '../actions/formActions';
import { ChuongHocService } from '../../services/ChuongHocService';
import * as khoaHocActions from '../actions/khoaHocActions';

/*============== LẤY TẤT CẢ  ==============*/
function* layDanhSachChuongHocgSaga(action) {
    try {
        const { data } = yield call(() => ChuongHocService.layDanhSachChuongHocService());
        yield put(actions.layDanhSachChuongHocThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachChuongHocThatBaiAction(error));
    }
}

export function* theoDoiLayDanhSachChuongHoc() { 
    yield takeLatest(types.LAY_DANH_SACH_CHUONG_HOC, layDanhSachChuongHocgSaga);
}

/*============== LẤY PHÂN TRANG  ==============*/
function* layChuongHocPhanTrangSaga(action) {
    const { keywords, page, size } = action.payload;
    try {
        yield put(khoaHocActions.layDanhSachKhoaHocAction());
        const { data } = yield call(() => ChuongHocService.layChuongHocPhanTrangService(page, size, keywords));
        yield put(actions.layDanhSachChuongHocPhanTrangThanhCongAction(data));
    } catch (error) {
        yield put(actions.layDanhSachChuongHocPhanTrangThatBaiAction(error));
    }
}

export function* theoDoiLayChuongHocPhanTrang() { 
    yield takeLatest(types.LAY_DANH_SACH_CHUONG_HOC_PHAN_TRANG, layChuongHocPhanTrangSaga);
}

/*============== THÊM MỚI  ==============*/
function* themMoiChuongHocSaga(action) {
    const { model } = action.payload;
    try {
        yield call(() => ChuongHocService.themMoiChuongHocService(model));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoThemMoiThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoThemMoiThatBaiAction());
    }
}

export function* theoDoiThemMoiChuongHoc() { 
    yield takeLatest(types.THEM_MOI_CHUONG_HOC, themMoiChuongHocSaga);
}

/*============== CẬP NHẬT ==============*/
function* capNhatChuongHocSaga(action) {
    const { id, model } = action.payload;
    try {
        const { data } = yield call(() => ChuongHocService.capNhatChuongHocService(id, model));
        yield put(actions.capNhatChuongHocThanhCongAction(data));
        yield put(formActions.dongFormAction());
        yield put(tbActions.thongBaoCapNhatThanhCongAction());
    } catch (error) {
        yield put(tbActions.thongBaoCapNhatThatBaiAction());
    }
}

export function* theoDoiCapNhatChuongHoc() { 
    yield takeLatest(types.CAP_NHAT_CHUONG_HOC, capNhatChuongHocSaga);
}

/*============== XÓA ==============*/
function* xoaChuongHocSaga(action) {
    const { params } = action.payload;
    try {
        const { data } = yield call(() => ChuongHocService.xoaChuongHocService(params));
        yield put(actions.xoaChuongHocThanhCongAction(data.content[0]));
        yield put(tbActions.thongBaoXoaThanhCongAction());
    } catch (error) {
        console.log(error)
        yield put(tbActions.thongBaoXoaThatBaiAction());
    }
}

export function* theoDoiXoaChuongHoc() { 
    yield takeLatest(types.XOA_CHUONG_HOC, xoaChuongHocSaga);
}