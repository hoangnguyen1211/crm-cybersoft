import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khachHangActions';
import * as formActions from '../../redux/actions/formActions';
import { nguonGioiThieuOptions } from '../../util/SelectOption';
import RegisterClassForm from './RegisterClassForm';
import CustomerForm from './CustomerForm';
import { KhachHangGhiDanh, KhachHang } from '../../models';
import {
    DetailHeader, DetailHeaderTop, DetailHeaderBottom,
    DetailPage, DetailLeft, DetailContent, DetailsRight
} from '../../components/details';
import './CustomerDetails.scss';

class CustomerDetails extends Component {

    state = {
        khachHang: {}
    }

    componentDidMount = () => {
        const { khachHang } = this.props.location.state;
        this.setState({ khachHang });
    }

    renderTrangThai = (maTrangThai) => {
        const dsTrangThai = ['Mới', 'Đã tư vấn', 'Hẹn đóng tiền', 'Hoàn thành'];
        return dsTrangThai.map((item, index) => {
            const className = index <= maTrangThai ? 'step-bar_item active' : 'step-bar_item';
            return <div className={className} key={index}>
                <span>{item}</span>
                <div className="item_arrow"></div>
            </div>
        });
    }

    onGhiDanhLopHoc = () => {
        const { thongTinKH, tenKH, biDanh, id } = this.state.khachHang;
        const title = 'Ghi danh khách hàng vào lớp học';
        const valids = ["maLopHoc"];
        const model = new KhachHangGhiDanh(id, thongTinKH.email, 'Cybersoft123456@', tenKH, biDanh, thongTinKH.soDienThoai, '');
        this.props.dispatch(formActions.moFormThemMoiAction(RegisterClassForm, title, model, valids));
    }

    getNguonGioiThieu = (maNguonGioiThieu) => {
        const gioiThieu = nguonGioiThieuOptions.find(x => x.value === maNguonGioiThieu);
        return gioiThieu ? gioiThieu.label : '';
    }

    onCapNhatKhachHang = () => {
        const { khachHang } = this.state;
        const { diaChi, thongTinKH } = khachHang;
        const title = "Cập nhật khách hàng";
        
        const model = new KhachHang(khachHang.id, khachHang.tenKH, khachHang.biDanh, thongTinKH.email, thongTinKH.soDienThoai,
            diaChi.thanhPho, diaChi.quan, diaChi.diaChi, thongTinKH.ngaySinh, thongTinKH.nguonGioiThieu,
            thongTinKH.congViecHienTai, thongTinKH.truongDaVaDangHoc, thongTinKH.mucTieu, thongTinKH.diemTiemNang,
            khachHang.maTrangThaiKH, khachHang.MaNguoiTuVan, thongTinKH.GhiChu);
        this.props.dispatch(
            formActions.moFormCapNhatAction(CustomerForm, title, model, [], true)
        );
    }

    render() {
        const { khachHang } = this.state;
        const { diaChi, thongTinKH } = khachHang;
        return (
            <DetailPage>
                <DetailLeft>
                    <DetailHeader>
                        <DetailHeaderTop
                            title="Chi tiết khách hàng"
                            onClick={this.onGhiDanhLopHoc}
                            buttonLabel="Ghi danh lớp học"
                        />
                        <DetailHeaderBottom
                            onClick={this.onCapNhatKhachHang}
                            iconLarge="person"
                            iconSmall="phone_iphone"
                            infoSmall={thongTinKH ? thongTinKH.soDienThoai : ''}
                            title={khachHang.tenKH}
                        />
                        <div className="step-bar">
                            {khachHang.maTrangThaiKH ? this.renderTrangThai(khachHang.maTrangThaiKH) : null}
                        </div>
                    </DetailHeader>

                    <DetailContent>
                        <div className="details-body_info">
                            <div className="card-info">
                                <div className="card-item">
                                    <div className="card-header">
                                        <h3>Thông tin cá nhân</h3>
                                    </div>
                                    <div className="card-content">
                                        <div className="info-list-item">
                                            <b>Họ tên:</b>
                                            <span>{khachHang.tenKH}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Giới tính: </b>
                                            <span>{thongTinKH ? thongTinKH.gioiTinh : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Ngày sinh:</b>
                                            <span>{thongTinKH ? thongTinKH.ngaySinh : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Công việc hiện tại: </b>
                                            <span>{thongTinKH ? thongTinKH.congViecHienTai : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Trường học: </b>
                                            <span>{thongTinKH ? thongTinKH.truongDaVaDangHoc : ''}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="card-item">
                                    <div className="card-header">
                                        <h3>Thông tin liên lạc</h3>
                                    </div>
                                    <div className="card-content">
                                        <div className="info-list-item">
                                            <b>Email:</b>
                                            <span>{thongTinKH ? thongTinKH.email : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Điện thoại:</b>
                                            <span>{thongTinKH ? thongTinKH.soDienThoai : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Thành phố: </b>
                                            <span>{diaChi ? diaChi.thanhPho : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Quận: </b>
                                            <span>{diaChi ? diaChi.quan : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Địa chỉ: </b>
                                            <span>{diaChi ? diaChi.diaChi : ''}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-info">
                                <div className="card-item">
                                    <div className="card-header">
                                        <h3>Thông tin khác</h3>
                                    </div>
                                    <div className="card-content">
                                        <div className="info-list-item">
                                            <b>Mục tiêu:</b>
                                            <span>{thongTinKH ? thongTinKH.mucTieu : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Mức độ tiềm năng:</b>
                                            <span>{thongTinKH ? thongTinKH.diemTiemNang : ''}%</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Nguồn giới thiệu: </b>
                                            <span>{thongTinKH ? this.getNguonGioiThieu(thongTinKH.nguonGioiThieu) : ''}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Người tư vấn: </b>
                                            <span>{khachHang.maNguoiTuVan}</span>
                                        </div>
                                        <div className="info-list-item">
                                            <b>Ghi chú: </b>
                                            <span>{thongTinKH ? thongTinKH.ghiChu : ''}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DetailContent>
                </DetailLeft>

                <DetailsRight>

                </DetailsRight>
            </DetailPage>
        )
    }
}

export default connect(null, null)(CustomerDetails);
