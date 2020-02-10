import React, { Component } from 'react';
import { TextField, AreaField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/loTrinhActions';
import { toAliasString } from '../../util';

class SeriesForm extends Component {

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;

        model.biDanh = toAliasString(model.tenLoTrinh);

        if(valids.length === 0 && type === 'ADD'){
            this.props.dispatch(actions.themMoiLoTrinhAction(model));
        }
        else if(valids.length === 0 && type === 'EDIT'){
            this.props.dispatch(actions.capNhatLoTrinhAction(model));
        }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { model, valids } = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Tên lộ trình"
                    name="tenLoTrinh"
                    required
                    onChange={this.onChange}
                    value={model.tenLoTrinh}
                />
                <TextField
                    label="Học phí"
                    name="hocPhi"
                    type="number"
                    required
                    onChange={this.onChange}
                    value={model.hocPhi}
                />
                <AreaField
                    label="Thông tin khóa học"
                    name="moTa"
                    onChange={this.onChange}
                    value={model.moTa}
                    style={{ width: '100%' }}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(SeriesForm);
