import React from 'react';
import { Icon } from '@material-ui/core'
import { Menu, Dropdown } from 'antd';
import './FormDropdown.scss';

export default function FormDropdown(props) {
    const menu = (
        <Menu className="form-menu">
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
            <a className="btn-add">
                <Icon>add_circle</Icon>
            </a>
        </Dropdown>
    )
}