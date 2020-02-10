import React from 'react';
import { Icon } from '@material-ui/core'
import { Menu, Dropdown } from 'antd';
import './ProfileDropdown.scss';

export default function ProfileDropdown(props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <a href="#">
                    Thông tin cá nhân
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">
                    Thống kê công việc
                </a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">
                    Thoát
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link nav-dropdown-link" href="#">
                <b>Cybersoft </b>
                <Icon>arrow_drop_down</Icon>
            </a>
        </Dropdown>
    )
}
