import React from 'react';
import { Icon } from '@material-ui/core';

export default function DetailHeaderBottom(props) {
    const { onClick, iconLarge, iconSmall, infoSmall, title } = props;
    return (
        <div className="header-bottom">
            <div className="header-left">
                <div className="icon-box">
                    <Icon>{iconLarge}</Icon>
                </div>
                <div className="info">
                    <h2>{title}</h2>
                    <div className="info-small">
                        <Icon>{iconSmall}</Icon>
                        <small>{infoSmall}</small>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <a onClick={onClick}>
                    <Icon>settings</Icon>
                </a>
            </div>
        </div>
    )
}
