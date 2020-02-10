import React, { Component } from 'react';
import { TextField, AreaField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/quyenActions';
import { toAliasString  } from '../../util';

class RoleForm extends Component {

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;

        model.biDanh = toAliasString(model.tenQuyen);
        
        if(valids.length === 0 && type === 'ADD'){
            this.props.dispatch(actions.themMoiQuyenAction(model));
        }
        else if(valids.length === 0 && type === 'EDIT'){
            this.props.dispatch(actions.capNhatQuyenAction(model));
        }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { type, model, valids } = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Mã quyền"
                    name="id"
                    required
                    onChange={this.onChange}
                    value={model.id}
                    readOnly={type === 'EDIT'}
                />
                <TextField
                    label="Tên quyền"
                    name="tenQuyen"
                    required
                    onChange={this.onChange}
                    value={model.tenQuyen}
                />
                <AreaField
                    label="Mô tả"
                    name="moTa"
                    required
                    onChange={this.onChange}
                    value={model.moTa}
                    style={{ width: '100%' }}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(RoleForm);
