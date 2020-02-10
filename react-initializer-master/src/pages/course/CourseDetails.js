import React, { Component } from 'react';
import { Button } from 'antd';
import { Icon } from '@material-ui/core';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khoaHocActions';
import * as chuongHocActions from '../../redux/actions/chuongHocActions';
import * as baiHocActions from '../../redux/actions/baiHocActions';
import * as formActions from '../../redux/actions/formActions';
import { ChuongHoc, BaiHoc, KhoaHoc } from '../../models';
import ChapterForm from './ChapterForm';
import LessonForm from './LessonForm';
import CourseForm from './CourseForm';
import { DragSortable, SortableItem } from '../../components/base/drag-drop';
import {
    DetailHeader, DetailHeaderTop, DetailHeaderBottom,
    DetailPage, DetailLeft, DetailContent, DetailsRight
} from '../../components/details';
import './Course.scss';

class CourseDetails extends Component {

    state = {
        dsChuongHoc: [],
        trangThai: false
    }

    componentDidMount = () => {
        const { khoaHoc } = this.props.location.state;
        this.props.dispatch(actions.layThongTinKhoaHocTheoIdAction(khoaHoc.id));
    }

    static getDerivedStateFromProps(props, state) {
        const { thongTinChuongHoc } = props.khoaHocProp.current;
        if (thongTinChuongHoc && !state.trangThai)
            return { ...state, dsChuongHoc: thongTinChuongHoc };
        return null;
    }

    onCapNhatKhoaHoc = () => {
        const { khoaHoc } = this.props.location.state;
        const title = "Cập nhật khóa học";
        const model = new KhoaHoc(khoaHoc.id, khoaHoc.tenKhoaHoc, khoaHoc.biDanh, khoaHoc.hinhAnh, khoaHoc.soNgayKichHoat, khoaHoc.moTa);
        this.props.dispatch(
            formActions.moFormCapNhatAction(CourseForm, title, model, [])
        );
    }

    onThemChuongHoc = () => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        const { khoaHoc } = this.props.location.state;
        const title = 'Thêm chương học';
        const valids = ["tenChuong"];

        const model = new ChuongHoc(0, '', '', khoaHoc.id, khoaHoc.tenKhoaHoc);
        this.props.dispatch(formActions.moFormThemMoiAction(ChapterForm, title, model, valids));
    }

    onCapNhatChuongHoc = (chuongHoc) => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        const { khoaHoc } = this.props.location.state;
        const title = 'Cập nhật chương học';
        const valids = ["tenChuong"];

        const model = new ChuongHoc(chuongHoc.id, chuongHoc.tenChuong, chuongHoc.biDanh, khoaHoc.id, khoaHoc.tenKhoaHoc);
        this.props.dispatch(formActions.moFormCapNhatAction(ChapterForm, title, model, valids));
    }

    onXoaChuongHoc = (id) => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        swal({
            title: "Thông báo!",
            text: "Bạn có muốn xóa chương này?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch(chuongHocActions.xoaChuongHocAction([id]))
                }
            });
    }

    onThemBaiHoc = (chuongHoc) => {
        // Nếu chưa lưu sắp xếp thì bắt lưu hoặc hủy trước
        if (!this.kiemTraHoanTatSapXep()) return;

        const title = 'Thêm bài học';
        const valids = ["tenBaiHoc", "maLoaiBai"];

        const model = new BaiHoc(0, '', '', 'ARTICLE', chuongHoc.id);
        this.props.dispatch(formActions.moFormCapNhatAction(LessonForm, title, model, valids));
    }

    renderDanhSachChuongHoc = () => {
        const { dsChuongHoc } = this.state;

        return dsChuongHoc ? dsChuongHoc.map((item, index) => {
            return <SortableItem key={index} draggableId={`item-${index}`} index={index}>
                <div className="course-list-item">
                    <div className="course-list-item_name">{item.tenChuong}</div>
                    <div className="course-list-item_action">
                        <a onClick={() => this.onThemBaiHoc(item)}><Icon>post_add</Icon></a>
                        <a onClick={() => this.onCapNhatChuongHoc(item)}><Icon>edit</Icon></a>
                        <a onClick={() => this.onXoaChuongHoc(item.id)}><Icon>delete_forever</Icon></a>
                    </div>
                </div>
            </SortableItem>
        }) : null
    }

    onDragEnd = (items) => {
        this.setState({ dsChuongHoc: items, trangThai: true });
    }

    onCapNhatSapXep = () => {
        const { dsChuongHoc } = this.state;
        const { khoaHoc } = this.props.location.state;

        const danhSachId = dsChuongHoc.map(item => item.id);
        this.setState({ trangThai: false });
        this.props.dispatch(actions.sapXepViTriChuongHocAction(khoaHoc.id, danhSachId));
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

    render() {
        const { khoaHoc } = this.props.location.state;
        const { dsChuongHoc, trangThai } = this.state;
        return (
            <DetailPage>
                <DetailLeft>
                    <DetailHeader>
                        <DetailHeaderTop
                            title="Chi tiết khóa học"
                            onClick={this.onThemChuongHoc}
                            buttonLabel="Thêm chương"
                        />
                        <DetailHeaderBottom
                            onClick={this.onCapNhatKhoaHoc}
                            iconLarge="school"
                            iconSmall="layers"
                            infoSmall={`${dsChuongHoc.length} chương học`}
                            title={khoaHoc.tenKhoaHoc}
                        />
                    </DetailHeader>

                    <DetailContent>
                        <div className="course-details-title">
                            <h2>Đề cương chi tiết</h2>
                            <div style={{ display: trangThai ? 'flex' : 'none' }}>
                                <Button onClick={this.onCapNhatSapXep} size="small" className="btn-save">Lưu</Button>
                                <Button onClick={this.onHuySapXep} size="small" className="btn-close">Hủy</Button>
                            </div>
                        </div>
                        <div className="course-list">
                            <DragSortable items={dsChuongHoc} onDragEnd={this.onDragEnd} droppableId="droppable">
                                {this.renderDanhSachChuongHoc()}
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
    return { khoaHocProp: state.khoaHocReducer }
}

export default connect(mapPropToState, null)(CourseDetails);
