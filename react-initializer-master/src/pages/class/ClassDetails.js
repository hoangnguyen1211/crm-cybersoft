import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/lopHocActions';
import * as formActions from '../../redux/actions/formActions';
import ClassForm from './ClassForm';
import { LopHoc } from '../../models';
import {
    DetailHeader, DetailHeaderTop, DetailHeaderBottom,
    DetailPage, DetailLeft, DetailContent, DetailsRight
} from '../../components/details';
import { trangThaiLopHocOptions } from '../../util/SelectOption';

class ClassDetails extends Component {

    state = {
        lopHoc: {}
    }

    componentDidMount = () => {
        const { lopHoc } = this.props.location.state;
        this.setState({ lopHoc });
    }

    renderTrangThai = (maTrangThai) => {
        return trangThaiLopHocOptions.map((item, index) => {
            const className = item.value <= maTrangThai ? 'step-bar_item active' : 'step-bar_item';
            return <div className={className} key={index}>
                <span>{item.label}</span>
                <div className="item_arrow"></div>
            </div>
        });
    }

    onTaoBaiTap = () => {
        // const { thongTinKH, tenKH, biDanh, id } = this.state.lopHoc;
        // const title = 'Ghi danh khách hàng vào lớp học';
        // const valids = ["maLopHoc"];
        // const model = new KhachHangGhiDanh(id, thongTinKH.email, 'Cybersoft123456@', tenKH, biDanh, thongTinKH.soDienThoai, '');
        // this.props.dispatch(formActions.moFormThemMoiAction(RegisterClassForm, title, model, valids));
    }

    onCapNhatLopHoc = () => {
        const { lopHoc } = this.state;
        const title = "Cập nhật lớp học";
        const model = new LopHoc(lopHoc.id, lopHoc.maLoTrinh, lopHoc.tenLopHoc, lopHoc.biDanh, lopHoc.soHocVien, lopHoc.hocPhi, 
            lopHoc.ngayBatDau, lopHoc.ngayKetThuc, lopHoc.maTrangThai, lopHoc.danhSachGiangVien, lopHoc.danhSachMentor, lopHoc.danhSachHocVien);
        this.props.dispatch(
            formActions.moFormCapNhatAction(ClassForm, title, model, [], true)
        );
    }

    render() {
        const { lopHoc } = this.state;
        return (
            <DetailPage>
                <DetailLeft>
                    <DetailHeader>
                        <DetailHeaderTop
                            title="Chi tiết lớp học"
                            onClick={this.onTaoBaiTap}
                            buttonLabel="Tạo bài tập"
                        />
                        <DetailHeaderBottom
                            onClick={this.onCapNhatLopHoc}
                            iconLarge="school"
                            iconSmall="person"
                            infoSmall={`${lopHoc.danhSachHocVien ? lopHoc.danhSachHocVien.length : 0} / ${lopHoc.soHocVien} học viên`}
                            title={lopHoc.tenLopHoc}
                        />
                        <div className="step-bar">
                            {lopHoc.maTrangThai ? this.renderTrangThai(lopHoc.maTrangThai) : null}
                        </div>
                    </DetailHeader>

                    <DetailContent>
                        
                    </DetailContent>
                </DetailLeft>

                <DetailsRight>

                </DetailsRight>
            </DetailPage>
        )
    }
}

export default connect(null, null)(ClassDetails);
