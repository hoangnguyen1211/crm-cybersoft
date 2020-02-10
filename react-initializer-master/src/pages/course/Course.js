import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khoaHocActions';
import * as formActions from '../../redux/actions/formActions';
import CourseForm from './CourseForm';
import { KhoaHoc } from '../../models';
import history from '../../util/History';

const columns = [
    {
        title: 'Tên khóa học',
        key: 'tenKhoaHoc',
        callback: (khoaHoc) => {
            history.push('/course-details', { khoaHoc });
        }
    },
    {
        title: 'Số ngày kích hoạt',
        key: 'soNgayKichHoat'
    },
    {
        title: 'Mô tả',
        key: 'moTa'
    }
]

const valids = ['tenKhoaHoc', 'soNgayKichHoat', 'hinhAnh'];

class Course extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachKhoaHocPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaKhoaHocAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachKhoaHocPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaKhoaHocAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật khóa học";
        const model = new KhoaHoc(item.id, item.tenKhoaHoc, item.biDanh, item.hinhAnh, item.soNgayKichHoat, item.moTa);
        this.props.dispatch(
            formActions.moFormCapNhatAction(CourseForm, title, model, [])
        );
    }

    openForm = () => {
        const title = "Thêm mới khoá học";
        const model = new KhoaHoc(0, '', '', '', 0, '');
        this.props.dispatch(
            formActions.moFormThemMoiAction(CourseForm, title, model, valids)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.khoaHocProp;
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
    return { khoaHocProp: state.khoaHocReducer }
}

export default connect(mapPropToState, null)(Course);
