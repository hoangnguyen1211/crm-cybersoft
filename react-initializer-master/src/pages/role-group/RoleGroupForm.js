import React, { Component } from 'react';
import { TextField, SelectMultiField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/nhomQuyenActions';
import { toAliasString  } from '../../util';

class RoleGroupForm extends Component {

    state = {
        dsQuyen: []
    }

    componentDidMount = () => {
        const { data } = this.props.quyenProp;
        let temps = data.map(item => {
            return { value: item.id, label: item.tenQuyen };
        });
        this.setState({ dsQuyen: temps });
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;

        model.biDanh = toAliasString(model.tenNhom);
        
        if(valids.length === 0 && type === 'ADD'){
            this.props.dispatch(actions.themMoiNhomQuyenAction(model));
        }
        else if(valids.length === 0 && type === 'EDIT'){
            this.props.dispatch(actions.capNhatNhomQuyenAction(model));
        }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { type, model, valids } = this.props;
        const { dsQuyen } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Mã nhóm quyền"
                    name="id"
                    required
                    onChange={this.onChange}
                    value={model.id}
                    readOnly={type === 'EDIT'}
                />
                <TextField
                    label="Tên nhóm quyền"
                    name="tenNhom"
                    required
                    onChange={this.onChange}
                    value={model.tenNhom}
                />
                <SelectMultiField
                    label="Danh sách quyền"
                    name="danhSachQuyen"
                    onChange={this.onChange}
                    value={model.danhSachQuyen}
                    options={dsQuyen}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

const mapPropToState = (state) => {
    return {
        quyenProp: state.quyenReducer
    }
}

export default connect(mapPropToState, null)(RoleGroupForm);
