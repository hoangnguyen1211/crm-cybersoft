import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/quyenActions';
import * as formActions from '../../redux/actions/formActions';
import RoleForm from './RoleForm';
import { Quyen } from '../../models';

const columns = [
    {
        title: 'Tên quyền',
        key: 'tenQuyen'
    },
    {
        title: 'Mô tả',
        key: 'moTa'
    }
]

const valids = ['id', 'tenQuyen', 'moTa'];

class RolePage extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachQuyenPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaQuyenAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachQuyenPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaQuyenAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật quyền";
        const model = new Quyen(item.id, item.tenQuyen, item.biDanh, item.moTa);
        this.props.dispatch(
            formActions.moFormCapNhatAction(RoleForm, title, model, [])
        );
    }

    openForm = () => {
        const title = "Thêm mới quyền";
        const model = new Quyen('', '', '', '');
        this.props.dispatch(
            formActions.moFormThemMoiAction(RoleForm, title, model, valids)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.quyenProp;
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
    return { quyenProp: state.quyenReducer }
}

export default connect(mapPropToState, null)(RolePage);
