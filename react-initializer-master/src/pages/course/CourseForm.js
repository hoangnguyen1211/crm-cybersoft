import React, { Component } from 'react';
import { TextField, AreaField, FormBottom, ImageField } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khoaHocActions';
import { toAliasString  } from '../../util';

class CourseForm extends Component {

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;
        
        model.biDanh = toAliasString(model.tenKhoaHoc);

        if (valids.length === 0 && type === 'ADD') {
            this.props.dispatch(actions.themMoiKhoaHocAction(model));
        }
        else if (valids.length === 0 && type === 'EDIT') {
            this.props.dispatch(actions.capNhatKhoaHocAction(model));
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
                    required
                    onChange={this.onChange}
                    value={model.tenKhoaHoc}
                />
                <TextField
                    label="Số ngày kích hoạt"
                    name="soNgayKichHoat"
                    type="number"
                    required
                    onChange={this.onChange}
                    value={model.soNgayKichHoat}
                />
                <ImageField
                    label="Hình ảnh"
                    name="hinhAnh"
                    required
                    onChange={this.onChange}
                    value={model.hinhAnh}
                />
                <AreaField
                    label="Mô tả"
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

export default connect(null, null)(CourseForm);
