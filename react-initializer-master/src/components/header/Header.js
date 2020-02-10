import React from 'react';
import { Button, Input } from 'antd';
import { Icon } from '@material-ui/core';
import './Header.scss';

const { Search } = Input;

export default function Header(props) {
    const { onClick, onSearch, buttonEnabled, searchEnabled } = props;

    const renderButton = () => {
        return buttonEnabled ? <Button type="primary" className="flex-items-center" onClick={() => onClick()}>
            <Icon style={{ margin: 0 }}>add</Icon>
        </Button> : null;
    }
    const renderSearch = () => {
        return searchEnabled ? <Search
            placeholder="Search"
            onKeyUp={event => onSearch(event.target.value)}
            style={{ width: 200 }}
        /> : null;
    }

    return (
        <div className="flex-items-center header">
            <div>
                { renderButton() }
            </div>
            <div>
                {renderSearch() }
            </div>
        </div>
    )
}
