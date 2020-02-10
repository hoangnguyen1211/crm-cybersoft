import React, { Component } from 'react';
import { TextField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import * as khoaHocActions from '../../redux/actions/khoaHocActions';
import * as chuongHocActions from '../../redux/actions/chuongHocActions';
import { toAliasString  } from '../../util';

class ChapterForm extends Component {

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;
        
        model.biDanh = toAliasString(model.tenChuong);

        if (type === 'ADD' && valids.length === 0) {
            console.log('ADD');
            this.props.dispatch(khoaHocActions.themChuongHocVaoKhoaHocAction(model.maKhoaHoc, model));
        }
        else if (type === 'EDIT' && valids.length === 0) {
            console.log('EDIT');
            this.props.dispatch(chuongHocActions.capNhatChuongHocAction(model.id, model));
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
                    label="Tên khóa học"
                    name="tenKhoaHoc"
                    onChange={this.onChange}
                    value={model.tenKhoaHoc}
                    readOnly={true}
                />
                <TextField
                    label="Tên chương học"
                    name="tenChuong"
                    required
                    onChange={this.onChange}
                    value={model.tenChuong}
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(ChapterForm);