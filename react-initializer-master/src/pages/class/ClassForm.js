import React, { Component } from 'react';
import { TextField, SelectField, SelectMultiField, FormBottom, RadioField, DateField } from '../../components/base';
import { connect } from 'react-redux';
import { NguoiDungService } from '../../services/NguoiDungService';
import { LoTrinhSevice  } from '../../services/LoTrinhService';
import * as actions from '../../redux/actions/lopHocActions';
import { DateFormat, toAliasString } from '../../util';
import { trangThaiLopHocOptions } from '../../util/SelectOption';

class ClassForm extends Component {

    state = {
        dsGiangVien: [],
        dsMentor: [],
        dsLoTrinh: []
    }

    componentDidMount = () => {
        const values = ['MENTOR', 'GIANGVIEN'];
        NguoiDungService.layDanhSachNguoiDungTheoDieuKienService('MaNhomQuyen', values)
        .then(res =>  {
            const listGiangVien = res.data.content.filter(item => item.maNhomQuyen === 'GIANGVIEN');
            const listTroGiang = res.data.content.filter(item => item.maNhomQuyen === 'MENTOR');
            const dsGiangVien = listGiangVien.map(item => {
                return { value: item.id, label: item.hoTen };
            });
            const dsMentor = listTroGiang.map(item => {
                return { value: item.id, label: item.hoTen };
            });
            this.setState({ dsMentor, dsGiangVien });
        });

        LoTrinhSevice.layLoTrinhPhanTrangService(1, 200)
        .then(res =>  {
            let temps = res.data.content.items.map(item => {
                return { value: item.id, label: item.tenLoTrinh };
            });
            this.setState({ dsLoTrinh: temps });
        });
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, valids, model } = this.props;

        model.biDanh = toAliasString(model.tenLopHoc);
        const temp = {
            ...model,
            ngayBatDau: DateFormat(model.ngayBatDau),
            ngayKetThuc: DateFormat(model.ngayKetThuc)
        }

        console.log(temp)

        if(valids.length === 0 && type === 'ADD'){
            this.props.dispatch(actions.themMoiLopHocAction(temp));
        }
        else if(valids.length === 0 && type === 'EDIT'){
            this.props.dispatch(actions.capNhatLopHocAction(temp));
        }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { model, valids } = this.props;
        const { dsGiangVien, dsMentor, dsLoTrinh } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <SelectField
                    label="Lộ trình"
                    name="maLoTrinh"
                    required
                    onChange={this.onChange}
                    value={model.maLoTrinh}
                    options={dsLoTrinh}
                />
                <TextField
                    label="Tên lớp"
                    name="tenLopHoc"
                    required
                    onChange={this.onChange}
                    value={model.tenLopHoc}
                />
                 <TextField
                    label="Số học viên"
                    name="soHocVien"
                    required
                    type="number"
                    onChange={this.onChange}
                    value={model.soHocVien}
                />
                <TextField
                    label="Học phí"
                    name="hocPhi"
                    type="number"
                    required
                    onChange={this.onChange}
                    value={model.hocPhi}
                />
                <RadioField 
                    label="Trạng thái"
                    name="maTrangThai"
                    required
                    options={trangThaiLopHocOptions}
                    style={{ width: '100%' }}
                    onChange={this.onChange}
                    defaultValue={1}
                    value={model.maTrangThai}
                />
                <DateField
                    label="Ngày khai giảng"
                    name="ngayBatDau"
                    required
                    onChange={this.onChange}
                    value={model.ngayBatDau}
                    mode="date"
                />
                <DateField
                    label="Ngày kết thúc"
                    name="ngayKetThuc"
                    required
                    onChange={this.onChange}
                    value={model.ngayKetThuc}
                    mode="date"
                />
                <SelectMultiField
                    label="Danh sách giảng viên"
                    name="danhSachGiangVien"
                    onChange={this.onChange}
                    value={model.danhSachGiangVien}
                    options={dsGiangVien}
                />
                <SelectMultiField
                    label="Danh sách mentor"
                    name="danhSachMentor"
                    onChange={this.onChange}
                    value={model.danhSachMentor}
                    options={dsMentor}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(ClassForm);
