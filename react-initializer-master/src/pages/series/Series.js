import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/loTrinhActions';
import * as formActions from '../../redux/actions/formActions';
import SeriesForm from './SeriesForm';
import { LoTrinh } from '../../models';
import history from '../../util/History';

const columns = [
    {
        title: 'Tên lộ trình',
        key: 'tenLoTrinh',
        callback: (loTrinh) => {
            history.push('/series-details', { loTrinh });
        }
    },
    {
        title: 'Học phí',
        key: 'hocPhi',
        func: value => {
            return <span>{value.toLocaleString()} vnđ</span>
        }
    },
    {
        title: 'Thông tin khóa học',
        key: 'moTa'
    },
    {
        title: 'Số học viên',
        key: 'soNguoiDangKy'
    }
]

const valids = ['tenLoTrinh', 'hocPhi'];

class Series extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachLoTrinhPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaLoTrinhAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachLoTrinhPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaLoTrinhAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật lộ trình";
        const model = new LoTrinh(item.id, item.tenLoTrinh, item.biDanh, item.hocPhi, item.moTa, item.danhSachKhoaHoc);
        this.props.dispatch(
            formActions.moFormCapNhatAction(SeriesForm, title, model, [])
        );
    }

    openForm = () => {
        const title = "Thêm mới lộ trình";
        const model = new LoTrinh(0, '', '', '', '');
        this.props.dispatch(
            formActions.moFormThemMoiAction(SeriesForm, title, model, valids)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.loTrinhProp;
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
    return { loTrinhProp: state.loTrinhReducer }
}

export default connect(mapPropToState, null)(Series);
