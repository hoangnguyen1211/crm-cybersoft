import React, { Component } from 'react';
import { Button } from 'antd';
import { Icon } from '@material-ui/core';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/loTrinhActions';
import * as khoaHocActions from '../../redux/actions/khoaHocActions';
import * as formActions from '../../redux/actions/formActions';
import { LoTrinh, KhoaHoc } from '../../models';
import AddCourseForm from './AddCourseForm';
import { DragSortable, SortableItem } from '../../components/base/drag-drop';
import {
    DetailHeader, DetailHeaderTop, DetailHeaderBottom,
    DetailPage, DetailLeft, DetailContent, DetailsRight
} from '../../components/details';
import history from '../../util/History';

class SeriesDetails extends Component {

    state = {
        dsKhoaHoc: [],
        trangThai: false
    }

    componentDidMount = () => {
        const { loTrinh } = this.props.location.state;
        this.props.dispatch(actions.layThongTinLoTrinhTheoIdAction(loTrinh.id));
    }

    static getDerivedStateFromProps(props, state) {
        const { thongTinKhoaHoc } = props.loTrinhProp.current;
        if (thongTinKhoaHoc && !state.trangThai)
            return { ...state, dsKhoaHoc: thongTinKhoaHoc };
        return null;
    }

    onThemKhoaHoc = () => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        const { dsKhoaHoc } = this.state;
        const { loTrinh } = this.props.location.state;

        const title = 'Thêm khóa học';
        const valids = ["danhSachKhoaHoc"];
        const temps = dsKhoaHoc.map(item => item.id.toString());
        const model = new LoTrinh(loTrinh.id, loTrinh.tenLoTrinh, loTrinh.biDanh, loTrinh.hocPhi, loTrinh.moTa, temps);
        this.props.dispatch(formActions.moFormThemMoiAction(AddCourseForm, title, model, valids));
    }

    onXoaKhoaHoc = (id) => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        const { loTrinh } = this.props.location.state;
        const { dsKhoaHoc } = this.state;

        swal({
            title: "Thông báo!",
            text: "Bạn có muốn xóa khóa học này?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    let temps = dsKhoaHoc.filter(item => item.id !== id);
                    temps = temps.map(item => parseInt(item.id));
                    this.props.dispatch(actions.capNhatDanhSachKhoaHocCuaLoTrinhAction(loTrinh.id, temps));
                }
            });
    }

    onChiTietKhoaHoc = (khoaHoc) => {
        history.push('/course-details', { khoaHoc });
    }

    onDragEnd = (items) => {
        this.setState({ dsKhoaHoc: items, trangThai: true });
    }

    onCapNhatSapXep = () => {
        const { dsKhoaHoc } = this.state;
        const { loTrinh } = this.props.location.state;

        const danhSachId = dsKhoaHoc.map(item => item.id);
        this.setState({ trangThai: false });
        this.props.dispatch(actions.sapXepViTriKhoaHocAction(loTrinh.id, danhSachId));
    }

    onHuySapXep = () => {
        this.setState({ trangThai: false });
    }

    kiemTraHoanTatSapXep = () => {
        if (this.state.trangThai) {
            swal("Thông báo!", "Vui lòng lưu hoặc hủy sắp xếp trước khi thực hiện công việc khác!");
            return false;
        }
        return true;
    }

    renderDanhSachKhoaHoc = () => {
        const { dsKhoaHoc } = this.state;
        return dsKhoaHoc ? dsKhoaHoc.map((item, index) => {
            return <SortableItem key={index} draggableId={`item-${index}`} index={index}>
                <div className="course-list-item">
                    <div className="course-list-item_name">{item.tenKhoaHoc}</div>
                    <div className="course-list-item_action">
                        <a onClick={() => this.onChiTietKhoaHoc(item)} title="Chi tiêt khóa học"><Icon>library_books</Icon></a>
                        <a onClick={() => this.onXoaKhoaHoc(item.id)} title="Xóa khóa học"><Icon>delete_forever</Icon></a>
                    </div>
                </div>
            </SortableItem>
        }) : null
    }

    render() {
        const { loTrinh } = this.props.location.state;
        const { dsKhoaHoc, trangThai } = this.state;
        return (
            <DetailPage>
                <DetailLeft>
                    <DetailHeader>
                        <DetailHeaderTop
                            title="Chi tiết lộ trình"
                            onClick={this.onThemKhoaHoc}
                            buttonLabel="Thêm khóa học"
                        />
                        <DetailHeaderBottom
                            onClick={this.onCapNhatKhoaHoc}
                            iconLarge="school"
                            iconSmall="layers"
                            infoSmall={`${dsKhoaHoc.length} khóa học`}
                            title={loTrinh.tenLoTrinh}
                        />
                    </DetailHeader>

                    <DetailContent>
                        <div className="course-details-title">
                            <h2>Danh sách khóa học</h2>
                            <div style={{ display: trangThai ? 'flex' : 'none' }}>
                                <Button onClick={this.onCapNhatSapXep} size="small" className="btn-save">Lưu</Button>
                                <Button onClick={this.onHuySapXep} size="small" className="btn-close">Hủy</Button>
                            </div>
                        </div>
                        <div className="course-list">
                            <DragSortable items={dsKhoaHoc} onDragEnd={this.onDragEnd} droppableId="droppable">
                                { this.renderDanhSachKhoaHoc() }
                            </DragSortable>
                        </div>
                    </DetailContent>
                </DetailLeft>

                <DetailsRight>

                </DetailsRight>
            </DetailPage>
        )
    }
}

const mapPropToState = (state) => {
    return { loTrinhProp: state.loTrinhReducer }
}

export default connect(mapPropToState, null)(SeriesDetails);
