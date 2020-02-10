import React, { Component } from 'react';
import { Table } from '../../components/base';
import { Header } from '../../components';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/lopHocActions';
import * as formActions from '../../redux/actions/formActions';
import ClassForm from './ClassForm';
import { LopHoc } from '../../models';
import { DateFormat, ClassStatusSwitch } from '../../util';
import history from '../../util/History';

const columns = [
    {
        title: 'Tên lớp',
        key: 'tenLopHoc',
        callback: (lopHoc) => {
            history.push('/class-details', { lopHoc });
        }
    },
    {
        title: 'Ngày bắt đầu',
        key: 'ngayBatDau',
        func: DateFormat
    },
    {
        title: 'Ngày kết thúc',
        key: 'ngayKetThuc',
        func: DateFormat
    },
    {
        title: 'Trạng thái',
        key: 'maTrangThai',
        func: ClassStatusSwitch
    }
]

const valids = ['tenLopHoc', 'maLoTrinh', 'soHocVien', 'hocPhi', 'ngayBatDau', 'ngayKetThuc', 'maTrangThai'];

class Class extends Component {

    componentDidMount = () => {
        this.props.dispatch(actions.layDanhSachLopHocPhanTrangAction(1, 10));
    }

    onDeleteMulti = (listChecked) => {
        const arrIds = listChecked.map(item => item.id);
        this.props.dispatch(actions.xoaLopHocAction(arrIds));
    }

    onChangePage = (page, size) => {
        this.props.dispatch(actions.layDanhSachLopHocPhanTrangAction(page, size));
    }

    onDelete = (item) => {
        const id = item.id;
        this.props.dispatch(actions.xoaLopHocAction([id]));
    }

    onUpdate = (item) => {
        const title = "Cập nhật lớp học";
        const model = new LopHoc(item.id, item.maLoTrinh, item.tenLopHoc, item.biDanh, item.soHocVien, item.hocPhi, 
            item.ngayBatDau, item.ngayKetThuc, item.maTrangThai, item.danhSachGiangVien, item.danhSachMentor, item.danhSachHocVien);
        this.props.dispatch(
            formActions.moFormCapNhatAction(ClassForm, title, model, [], true)
        );
    }

    openForm = () => {
        const title = "Thêm mới lớp học";
        const model = new LopHoc(0, '', '', '', '', '', '', '');
        this.props.dispatch(
            formActions.moFormThemMoiAction(ClassForm, title, model, valids, true)
        );
    }

    render() {
        const { pageIndex, pageSize, totalRow, data } = this.props.lopHocProp;
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
    return { lopHocProp: state.lopHocReducer }
}

export default connect(mapPropToState, null)(Class);
