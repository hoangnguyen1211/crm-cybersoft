import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './AdminLayout.scss';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';

const Layout = (props) => {
    const [toogle, setToogle] = useState(true);

    const onToogleSideBar = () => {
        setToogle(!toogle);
    }

    return (
        <div className="admin-container">
            <Sidebar
                toogle={toogle}
            />
            <div className="admin-wrapper">
                <Navbar 
                    onToogleSideBar={onToogleSideBar}
                />
                <div className="admin-content">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export const AdminLayout = ({ Component, ...propsRoute }) => {
    return (
        <Route {...propsRoute} render={({ ...propsComponent }) => {
            return (
                <Layout>
                    <Component {...propsComponent} />
                </Layout>
            )
        }} />
    )
}
