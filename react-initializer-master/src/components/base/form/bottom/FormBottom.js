import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions/formActions';
import './FormBottom.scss';

function FormBottom(props) {

    const onClose = () => {
        props.dispatch(actions.dongFormAction());
    }

    return (
        <div className="form-bottom input-group">
            <Button onClick={onClose}>Đóng</Button>
            <Button 
                type="primary" 
                htmlType="submit"
                disabled={props.disabled}
            >
                Lưu lại
            </Button>
        </div>
    )
}

export default connect(null, null)(FormBottom);