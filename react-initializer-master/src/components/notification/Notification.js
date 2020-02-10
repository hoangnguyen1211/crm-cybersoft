import React, { useEffect } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';

function Notification(props) {
    const { notifyProp } = props;

    useEffect(() => {
        if (notifyProp.status)
            openNotification(notifyProp.type, notifyProp.title, notifyProp.message);
    })

    const openNotification = (type, title, message) => {
        notification[type]({
            message: title,
            description: message,
        });
    };

    return (
        <div></div>
    )
}

function mapState(state) {
    return { notifyProp: state.thongBaoReducer }
}

export default connect(mapState, null)(Notification)
