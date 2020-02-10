import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/nhomQuyenActions';
import * as formActions from '../../redux/actions/formActions';
import RoleGroupForm from './RoleGroupForm';
import { NhomQuyen } from '../../models';
import { Tag } from 'antd';

const valids = ['id', 'tenNhom'];

class RoleGroupPage extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachNhomQuyenPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaNhomQuyenAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachNhomQuyenPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaNhomQuyenAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật nhóm quyền";
        const model = new NhomQuyen(item.id, item.tenNhom, item.biDanh, item.danhSachQuyen);
        this.props.dispatch(
            formActions.moFormCapNhatAction(RoleGroupForm, title, model, [])
        );
    }

    openForm = () => {
        const title = "Thêm mới nhóm quyền";
        const model = new NhomQuyen('', '', '', []);
        this.props.dispatch(
            formActions.moFormThemMoiAction(RoleGroupForm, title, model, valids)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.nhomQuyenProp;
        const { quyenProp } = this.props;
        const columns = [
            {
                title: 'Tên nhóm',
                key: 'tenNhom'
            },
            {
                title: 'Danh sách quyền',
                key: 'danhSachQuyen',
                func: (dsQuyen) => {
                    if(dsQuyen.length > 0)
                        return dsQuyen.map((item, index) => {
                            const temp = quyenProp.data.find(x => x.id === item);
                            return <Tag key={index} color="#87d068">{temp ? temp.tenQuyen : ""}</Tag>
                        });
                    else
                        return <Tag color="magenta">Chưa cấp quyền</Tag>
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
        nhomQuyenProp: state.nhomQuyenReducer,
        quyenProp: state.quyenReducer
    }
}

export default connect(mapPropToState, null)(RoleGroupPage);
