import React, { Component, Fragment } from 'react';
import { TextField, SelectField, ImageField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import { toAliasString } from '../../util';
import * as actions from '../../redux/actions/nguoiDungActions';

class UserForm extends Component {

    state = {
        dsNhomQuyen: []
    }

    componentDidMount = () => {
        const { data } = this.props.nhomQuyenProp;
        let temps = data.map(item => {
            return { value: item.id, label: item.tenNhom };
        });
        this.setState({ dsNhomQuyen: temps });
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;

        model.biDanh = toAliasString(model.hoTen);
        console.log(model)

        if (valids.length === 0 && type === 'ADD') {
            this.props.dispatch(actions.themMoiNguoiDungAction(model));
        }
        else if (valids.length === 0 && type === 'EDIT') {
            this.props.dispatch(actions.capNhatNguoiDungAction(model));
        }
        else {
            console.log('invalid');
        }
    }

    render() {
        const { type, model, valids } = this.props;
        const { dsNhomQuyen } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Họ tên"
                    name="hoTen"
                    required
                    onChange={this.onChange}
                    value={model.hoTen}
                />
                <TextField
                    label="Email"
                    name="email"
                    required
                    type="email"
                    onChange={this.onChange}
                    value={model.email}
                />
                {
                    type === 'ADD' ? <Fragment>
                        <TextField
                            label="Mật khẩu"
                            name="matKhau"
                            type="password"
                            required
                            onChange={this.onChange}
                            value={model.matKhau}
                        />
                        <TextField
                            label="Nhập lại mật khẩu"
                            name="nhapLaiMatKhau"
                            type="password"
                            required
                            onChange={this.onChange}
                            value={model.nhapLaiMatKhau}
                            compare={model.matKhau}
                        />
                    </Fragment> : null
                }
                <TextField
                    label="Số điện thoại"
                    name="soDT"
                    type="number"
                    required
                    onChange={this.onChange}
                    value={model.soDT}
                />
                <SelectField
                    label="Nhóm quyền"
                    name="maNhomQuyen"
                    required
                    onChange={this.onChange}
                    value={model.maNhomQuyen}
                    options={dsNhomQuyen}
                />
                <ImageField
                    label="Hình đại diện"
                    name="avatar"
                    onChange={this.onChange}
                    value={model.avatar}
                    style={{width: '100%'}}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

const mapPropToState = (state) => {
    return {
        nhomQuyenProp: state.nhomQuyenReducer
    }
}

export default connect(mapPropToState, null)(UserForm);
