import React, { Component } from 'react';
import { FormBottom, SelectMultiField, TextField } from '../../components/base';
import { connect } from 'react-redux';
import { KhoaHocService } from '../../services/KhoaHocService';
import * as actions from '../../redux/actions/loTrinhActions';

class AddCourseForm extends Component {

    state = {
        dsKhoaHoc: []
    }

    componentDidMount = () => {
        KhoaHocService.layDanhSachKhoaHocService()
        .then(res =>  {
            let temps = res.data.content.map(item => {
                return { value: item.id, label: item.tenKhoaHoc };
            });
            this.setState({ dsKhoaHoc: temps });
        });
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;
        if(valids.length === 0 && type === 'ADD'){
            const dsMaKhoaHoc = model.danhSachKhoaHoc.map(item => parseInt(item));
            this.props.dispatch(actions.capNhatDanhSachKhoaHocCuaLoTrinhAction(model.id, dsMaKhoaHoc));
        }
        // else if(valids.length === 0 && type === 'EDIT'){
        //     this.props.dispatch(actions.capNhatLoTrinhAction(model));
        // }
        else{
            console.log('invalid');
        }
    }

    render() {
        const { model, valids } = this.props;
        const { dsKhoaHoc } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Tên lộ trình"
                    name="tenLoTrinh"
                    onChange={this.onChange}
                    value={model.tenLoTrinh}
                    readOnly={true}
                />

                <SelectMultiField
                    label="Danh sách khóa học"
                    name="danhSachKhoaHoc"
                    onChange={this.onChange}
                    value={model.danhSachKhoaHoc}
                    options={dsKhoaHoc}
                    required
                />
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(AddCourseForm);
