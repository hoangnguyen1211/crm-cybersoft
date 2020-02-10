import React from 'react';
import Icon from '@material-ui/core/Icon';
import { ProfileDropdown, FormDropDown } from '../../../components/navbar';
import './Navbar.scss';

export default function Navbar(props) {
    const { toogle, onToogleSideBar } = props;

    const onOpenSideBar = () => {
        onToogleSideBar();
    }

    return (
        <div className="navbar">
            <div 
                className="bar-open"
                onClick={onOpenSideBar}>
                <Icon style={{fontSize: 22}}>reorder</Icon>
            </div>
            <div className="logo">

            </div>
            <div className="menu">
                {/* <FormDropDown /> */}
                <ProfileDropdown />
            </div>
        </div>
    )
}

