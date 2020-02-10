import React from 'react';
import { Button } from 'antd';

export default function DetailHeaderTop(props) {
    const { title, onClick, buttonLabel } = props;
    return (
        <div className="header-top">
            <div className="nav-left">
                <h4>{title}</h4>
            </div>
            <div className="nav-right">
                <Button onClick={onClick}>{buttonLabel}</Button>
            </div>
        </div>
    )
}
