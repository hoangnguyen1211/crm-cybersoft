import { all } from 'redux-saga/effects';
import * as loTrinhSaga from './loTrinhSagas';
import * as lopHocSaga from './lopHocSagas';
import * as khoaHocSaga from './khoaHocSagas';
import * as khachHangSaga from './khachHangSagas';
import * as quyenSaga from './quyenSagas';
import * as nhomQuyenSaga from './nhomQuyenSagas';
import * as nguoiDungSaga from './nguoiDungSagas';
import * as chuongHocSaga from './chuongHocSagas';
import * as baiHocSaga from './baiHocSagas';
import * as loaiBaiHocSaga from './loaiBaiHocSagas';

function* rootSaga() {
    yield all([
        //============ QUYỀN ==============
        quyenSaga.theoDoiLayQuyenPhanTrang(),
        quyenSaga.theoDoiLayDanhSachQuyen(),
        quyenSaga.theoDoiThemMoiQuyen(),
        quyenSaga.theoDoiCapNhatQuyen(),
        quyenSaga.theoDoiXoaQuyen(),
        //============ NHÓM QUYỀN ==============
        nhomQuyenSaga.theoDoiLayNhomQuyenPhanTrang(),
        nhomQuyenSaga.theoDoiLayDanhSachNhomQuyen(),
        nhomQuyenSaga.theoDoiThemMoiNhomQuyen(),
        nhomQuyenSaga.theoDoiCapNhatNhomQuyen(),
        nhomQuyenSaga.theoDoiXoaNhomQuyen(),
        //============ NGƯỜI DÙNG ==============
        nguoiDungSaga.theoDoiLayNguoiDungPhanTrang(),
        nguoiDungSaga.theoDoiLayDanhSachNguoiDung(),
        nguoiDungSaga.theoDoiThemMoiNguoiDung(),
        nguoiDungSaga.theoDoiCapNhatNguoiDung(),
        nguoiDungSaga.theoDoiXoaNguoiDung(),
        //============ KHÁCH HÀNG ==============
        khachHangSaga.theoDoiLayKhachHangPhanTrang(),
        khachHangSaga.theoDoiThemMoiKhachHang(),
        khachHangSaga.theoDoiCapNhatKhachHang(),
        khachHangSaga.theoDoiXoaKhachHang(),
        khachHangSaga.theoDoighiDanhKhachHang(),
        //============ LỘ TRÌNH =============
        loTrinhSaga.theoDoiLayDanhSachLoTrinh(),
        loTrinhSaga.theoDoiLayDanhSachLoTrinhPhanTrang(),
        loTrinhSaga.theoDoiThemMoiLoTrinh(),
        loTrinhSaga.theoDoiCapNhatLoTrinh(),
        loTrinhSaga.theoDoiXoaLoTrinh(),
        loTrinhSaga.theoDoiLayThongTinLoTrinhTheoId(),
        loTrinhSaga.theoDoiCapNhatKhoaHocCuaLoTrinhSaga(),
        loTrinhSaga.theoDoiSapXepViTriKhoaHoc(),
        //============ LỚP HỌC ==============
        lopHocSaga.theoDoiLayLopHocPhanTrang(),
        lopHocSaga.theoDoiThemMoiLopHoc(),
        lopHocSaga.theoDoiCapNhatLopHoc(),
        lopHocSaga.theoDoiXoaLopHoc(),
        //============ KHÓA HỌC ==============
        khoaHocSaga.theoDoiLayDanhSachKhoaHoc(),
        khoaHocSaga.theoDoiLayKhoaHocPhanTrang(),
        khoaHocSaga.theoDoiThemMoiKhoaHoc(),
        khoaHocSaga.theoDoiCapNhatKhoaHoc(),
        khoaHocSaga.theoDoiXoaKhoaHoc(),
        khoaHocSaga.theoDoiThemChuongHocVaoKhoaHoc(),
        khoaHocSaga.theoDoiLayThongTinKhoaHocTheoId(),
        khoaHocSaga.theoDoiSapXepViTriChuongHoc(),
        //============ CHƯƠNG HỌC ==============
        chuongHocSaga.theoDoiLayDanhSachChuongHoc(),
        chuongHocSaga.theoDoiLayChuongHocPhanTrang(),
        chuongHocSaga.theoDoiThemMoiChuongHoc(),
        chuongHocSaga.theoDoiCapNhatChuongHoc(),
        chuongHocSaga.theoDoiXoaChuongHoc(),
        //============ BÀI HỌC ==============
        baiHocSaga.theoDoiLayDanhSachBaiHoc(),
        baiHocSaga.theoDoiLayBaiHocPhanTrang(),
        baiHocSaga.theoDoiThemMoiBaiHoc(),
        baiHocSaga.theoDoiCapNhatBaiHoc(),
        baiHocSaga.theoDoiXoaBaiHoc(),
        //============ LOẠI BÀI HỌC ==============
        loaiBaiHocSaga.theoDoiLayDanhSachLoaiBaiHoc(),
        loaiBaiHocSaga.theoDoiLayLoaiBaiHocPhanTrang(),
        loaiBaiHocSaga.theoDoiThemMoiLoaiBaiHoc(),
        loaiBaiHocSaga.theoDoiCapNhatLoaiBaiHoc(),
        loaiBaiHocSaga.theoDoiXoaLoaiBaiHoc()
    ])
}

export default rootSaga;