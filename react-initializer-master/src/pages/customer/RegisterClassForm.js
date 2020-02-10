import React, { Component } from 'react';
import { FormBottom, SelectField } from '../../components/base';
import { connect } from 'react-redux';
import { LopHocSevice } from '../../services/LopHocService';
import * as actions from '../../redux/actions/khachHangActions';

class RegisterClassForm extends Component {

    state = {
        dsLopHoc: []
    }

    componentDidMount = () => {
        LopHocSevice.layDanhSachLopHocService()
            .then(res => {
                let temps = res.data.content.map(item => {
                    return { value: item.id, label: item.tenLopHoc };
                });
                this.setState({ dsLopHoc: temps });
            });
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { model, valids } = this.props;
        console.log(model);
        if(valids.length === 0){
            this.props.dispatch(actions.khachHangGhiDanhLopHocAction(model.id, model));
        }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { model, valids } = this.props;
        const { dsLopHoc } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <SelectField
                    label="Chọn lớp học"
                    name="maLopHoc"
                    onChange={this.onChange}
                    value={model.maLopHoc}
                    options={dsLopHoc}
                    required
                />
                <div style={{padding: '1rem'}}>
                    <small style={{color: 'orange'}}>*Sau khi ghi danh tự động đăng ký tài khoản cho học viên.</small><br/>
                    <small style={{color: 'orange'}}>* Mật khẩu mặc định: 'Cybersoft123456@'</small>
                </div>
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(RegisterClassForm);