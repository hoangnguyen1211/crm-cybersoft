import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/nguoiDungActions';
import * as formActions from '../../redux/actions/formActions';
import UserForm from './UserForm';
import { NguoiDung } from '../../models';
import history from '../../util/History';
import { Tag } from 'antd';
import { API_URL_DOMAIN } from '../../configs/UrlConfig'

const valids = ['hoTen', 'email', 'matKhau', 'nhapLaiMatKhau', 'soDT', 'maNhomQuyen'];

class UserPage extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachNguoiDungPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaNguoiDungAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachNguoiDungPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaNguoiDungAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật người dùng";
        const model = new NguoiDung(item.id, item.email, item.matKhau, item.matKhau,
            item.hoTen, item.biDanh, item.avatar, item.soDT, item.maNhomQuyen);
        this.props.dispatch(
            formActions.moFormCapNhatAction(UserForm, title, model, [], true)
        );
    }

    openForm = () => {
        const title = "Thêm mới người dùng";
        const model = new NguoiDung('', '', '', '', '', '', '', '', []);
        this.props.dispatch(
            formActions.moFormThemMoiAction(UserForm, title, model, valids, true)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.nguoiDungProp;
        const { nhomQuyenProp } = this.props;
        const columns = [
            {
                title: 'Họ tên',
                key: 'hoTen',
                callback: (value) => {
                    history.push('/user-details', { nguoiDung: value });
                }
            },
            {
                title: 'Email',
                key: 'email'
            },
            {
                title: 'Số điện thoại',
                key: 'soDT'
            },
            {
                title: 'Hình đại diện',
                key: 'avatar',
                func: (value) => {
                    return <img height="40" src={`${API_URL_DOMAIN}/${value}`} />
                }
            },
            {
                title: 'Nhóm quyền',
                key: 'maNhomQuyen',
                func: (value) => {
                    const temp = nhomQuyenProp.data.find(x => x.id === value);
                    return <Tag color="#2db7f5">{temp.tenNhom}</Tag>
                }
            }
        ];

        return (
            <div>
                <Header
                    buttonEnabled
                    searchEnabled
                    onClick={this.openForm}
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
    return {
        nguoiDungProp: state.nguoiDungReducer,
        nhomQuyenProp: state.nhomQuyenReducer
    }
}

export default connect(mapPropToState, null)(UserPage);
