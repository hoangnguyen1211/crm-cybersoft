import React from 'react';
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import './LinkItem.scss';

export default function LinkItem(props) {
    const { title, link, iconName } = props;
    return (
        <Link className="link-item" to={link} >
            <Icon style={{ fontSize: 15 }}>{iconName}</Icon>
            <span>{title}</span>
        </Link>
    )
}
