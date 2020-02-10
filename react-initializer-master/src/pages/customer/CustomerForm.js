import React, { Component } from 'react';
import { TextField, AreaField, FormBottom, DateField, SelectField } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khachHangActions';
import { ThongTinKH  } from '../../models';
import { diemTiemNangOptions, mucTieuOptions, trangThaiKHOptions, nguonGioiThieuOptions } from '../../util/SelectOption';

class CustomerForm extends Component {

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;
        
        const khachHang = new ThongTinKH(model.id, model.tenKH, model.biDanh, model.email, model.soDienThoai,
            model.thanhPho, model.quan, model.diaChi, model.ngaySinh, model.nguonGioiThieu, model.congViecHienTai,
            model.truongDaVaDangHoc, model.mucTieu, model.diemTiemNang, model.maTrangThaiKH, model.maTrangThaiKH, model.ghiChu);

        console.log(khachHang);
        if (valids.length === 0 && type === 'ADD') {
            this.props.dispatch(actions.themMoiKhachHangAction(khachHang));
        }
        else if (valids.length === 0 && type === 'EDIT') {
            this.props.dispatch(actions.capNhatKhachHangAction(khachHang));
        }
        else {
            console.log('invalid');
        }
    }

    render() {
        const { model, valids } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Họ tên"
                    name="tenKH"
                    required
                    onChange={this.onChange}
                    value={model.tenKH}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    required
                    onChange={this.onChange}
                    value={model.email}
                />
                <TextField
                    label="Số điện thoại"
                    name="soDienThoai"
                    type="number"
                    required
                    onChange={this.onChange}
                    value={model.soDienThoai}
                />
                <DateField
                    label="Ngày sinh"
                    name="ngaySinh"
                    onChange={this.onChange}
                    value={model.ngaySinh}
                />
                <SelectField
                    label="Thành phố"
                    name="thanhPho"
                    onChange={this.onChange}
                    value={model.thanhPho}
                />
                <SelectField
                    label="Quận"
                    name="quan"
                    onChange={this.onChange}
                    value={model.quan}
                />
                <TextField
                    label="Địa chỉ"
                    name="diaChi"
                    onChange={this.onChange}
                    value={model.diaChi}
                />
                <SelectField
                    label="Nguồn giới thiệu"
                    name="nguonGioiThieu"
                    required
                    onChange={this.onChange}
                    value={model.nguonGioiThieu}
                    options={nguonGioiThieuOptions}
                />
                <TextField
                    label="Công việc hiện tại"
                    name="congViecHienTai"
                    onChange={this.onChange}
                    value={model.congViecHienTai}
                />
                <TextField
                    label="Trường đã và đang học"
                    name="truongDaVaDangHoc"
                    onChange={this.onChange}
                    value={model.truongDaVaDangHoc}
                />
                 <SelectField
                    label="Mục tiêu khách hàng"
                    name="mucTieu"
                    onChange={this.onChange}
                    value={model.mucTieu}
                    options={mucTieuOptions}
                />
                 <SelectField
                    label="Mức độ tiềm năng"
                    name="diemTiemNang"
                    onChange={this.onChange}
                    value={model.diemTiemNang}
                    options={diemTiemNangOptions}
                />
                 <SelectField
                    label="Trạng thái khách hàng"
                    name="maTrangThaiKH"
                    onChange={this.onChange}
                    value={model.maTrangThaiKH}
                    options={trangThaiKHOptions}
                />
                 <SelectField
                    label="Người tư vấn"
                    name="maNguoiTuVan"
                    onChange={this.onChange}
                    value={model.maNguoiTuVan}
                />
                <AreaField
                    label="Ghi chú"
                    name="ghiChu"
                    onChange={this.onChange}
                    value={model.ghiChu}
                    style={{ width: '100%' }}
                    rows={4}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(CustomerForm);
