import { combineReducers } from 'redux';
import loTrinhReducer from './loTrinhReducer';
import lopHocReducer from './lopHocReducer';
import khoaHocReducer from './khoaHocReducer';
import khachHangReducer from './khachHangReducer';
import quyenReducer from './quyenReducer';
import nhomQuyenReducer from './nhomQuyenReducer';
import nguoiDungReducer from './nguoiDungReducer';
import chuongHocReducer from './chuongHocReducer';
import baiHocReducer from './baiHocReducer';
import loaiBaiHocReducer from './loaiBaiHocReducer';
import thongBaoReducer from './thongBaoReducer';
import formReducer from './formReducer';

export default combineReducers({
    loTrinhReducer,
    lopHocReducer,
    khoaHocReducer,
    thongBaoReducer,
    formReducer,
    khachHangReducer,
    quyenReducer,
    nhomQuyenReducer,
    nguoiDungReducer,
    chuongHocReducer,
    baiHocReducer,
    loaiBaiHocReducer
})