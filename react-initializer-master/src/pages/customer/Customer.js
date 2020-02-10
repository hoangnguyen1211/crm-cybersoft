import React, { Component, Fragment } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khachHangActions';
import * as formActions from '../../redux/actions/formActions';
import CustomerForm from './CustomerForm';
import { KhachHang } from '../../models';
import history from '../../util/History';
import { API_URL_DOMAIN } from '../../configs/UrlConfig';

const columns = [
    {
        title: 'Họ tên',
        key: 'tenKH',
        callback: (khachHang) => {
            history.push('/customer-details', { khachHang });
        }
    },
    {
        title: 'Ngày sinh',
        key: 'thongTinKH',
        func: (thongTinKH) => {
            return thongTinKH.ngaySinh
        }
    },
    {
        title: 'Email',
        key: 'thongTinKH',
        func: (thongTinKH) => {
            return thongTinKH.email
        }
    },
    {
        title: 'Số điện thoại',
        key: 'thongTinKH',
        func: (thongTinKH) => {
            return thongTinKH.soDienThoai
        }
    },
    {
        title: 'Hình CMND',
        key: 'thongTinKH',
        func: (thongTinKH) => {
            return <Fragment>
                <img height="50" src={`${API_URL_DOMAIN}${thongTinKH.cmndTruoc}`} />
                <img height="50" src={`${API_URL_DOMAIN}${thongTinKH.cmndSau}`} />
            </Fragment>
        }
    }
]

const valids = ['tenKH', 'email', 'soDienThoai', 'nguonGioiThieu'];

class Customer extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachKhachHangPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaKhachHangAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachKhachHangPhanTrangAction(page, size));
    }

    onSearch = (keywords) => {
        const { pageIndex, pageSize } = this.props.khachHangProp;
        this.props.dispatch(actions.layDanhSachKhachHangPhanTrangAction(pageIndex, pageSize, keywords));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaKhachHangAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật khách hàng";
        const { diaChi, thongTinKH } = item;
        const model = new KhachHang(item.id, item.tenKH, item.biDanh, thongTinKH.email, thongTinKH.soDienThoai,
            diaChi.thanhPho, diaChi.quan, diaChi.diaChi, thongTinKH.ngaySinh, thongTinKH.nguonGioiThieu,
            thongTinKH.congViecHienTai, thongTinKH.truongDaVaDangHoc, thongTinKH.mucTieu, thongTinKH.diemTiemNang,
            item.maTrangThaiKH, item.MaNguoiTuVan, thongTinKH.GhiChu);
        this.props.dispatch(
            formActions.moFormCapNhatAction(CustomerForm, title, model, [], true)
        );
    }

    openForm = () => {
        const title = "Thêm mới khách hàng";
        const model = new KhachHang(0, '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, '', '');
        this.props.dispatch(
            formActions.moFormThemMoiAction(CustomerForm, title, model, valids, true)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.khachHangProp;
        return (
            <div>
                <Header
                    buttonEnabled
                    searchEnabled
                    onClick={this.openForm}
                    onSearch={this.onSearch}
                />
                <Table
                    source={data}
                    columns={columns}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    totalRow={totalRow}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onChangePage={this.onChangePage}
                    onDeleteMulti={this.onDeleteMulti}
                />
            </div>
        )
    }
}

const mapPropToState = (state) => {
    return { khachHangProp: state.khachHangReducer }
}

export default connect(mapPropToState, null)(Customer);
