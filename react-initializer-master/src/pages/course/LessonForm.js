import React, { Component } from 'react';
import { TextField, SelectField, AreaField, FileField, FormBottom } from '../../components/base';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/khoaHocActions';
import { LoaiBaiHocService } from '../../services/LoaiBaiHocService';
import { toAliasString } from '../../util';

class LessonForm extends Component {

    state = {
        dsBaiHoc: []
    }

    componentDidMount = () => {
        LoaiBaiHocService.layDanhSachLoaiBaiHocService()
            .then(res => {
                const temps = res.data.content.map(item => {
                    return { value: item.id, label: item.tenLoaiBaiHoc };
                })
                this.setState({ dsBaiHoc: temps });
            })
            .catch(err => console.log(err));
    }

    onChange = (name, value, status) => {
        this.props.onChangeInput(name, value, status);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { type, model, valids } = this.props;

        // model.biDanh = toAliasString(model.tenBaiHoc);

        // console.log(model)
        // if (valids.length === 0) {
        //     this.props.dispatch(actions.themChuongHocVaoKhoaHocAction(model.maKhoaHoc, model));
        // }
        // else {
        //     console.log('invalid');
        // }
    }

    renderNoiDung = () => {
        const { model } = this.props;
        switch (model.maLoaiBai) {
            case 'FILE':
            case 'VIDEO_FPT':
                return <FileField
                    label="Upload file"
                    name="noiDung"
                    required
                    onChange={this.onChange}
                    value={model.noiDung}
                />
            default:
                return <AreaField
                    label="Nội dung"
                    name="noiDung"
                    onChange={this.onChange}
                    value={model.noiDung}
                />
        }
    }

    render() {
        const { model, valids } = this.props;
        const { dsBaiHoc } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    label="Tên bài học"
                    name="tenBaiHoc"
                    onChange={this.onChange}
                    value={model.tenBaiHoc}
                />
                <SelectField
                    label="Loại bài học"
                    name="maLoaiBai"
                    required
                    onChange={this.onChange}
                    value={model.maLoaiBai}
                    options={dsBaiHoc}
                />
                {
                    this.renderNoiDung()
                }
                <FormBottom disabled={valids.length !== 0} />
            </form>
        )
    }
}

export default connect(null, null)(LessonForm);