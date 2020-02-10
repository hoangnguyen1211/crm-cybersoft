import React, { Component } from 'react';
import { Router } from "react-router-dom";
import history from './util/History';
import { AdminLayout } from './templates/admin/AdminLayout';
import { 
    Home, Series, SeriesDetails, Class, ClassDetails, Course, CourseDetails, Customer, 
    CustomerDetails, RolePage, RoleGroupPage, UserPage
} from './pages';
import { FormDrawer } from './components/base';
import Notification from './components/notification/Notification';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <AdminLayout path="/home" exact Component={Home} />
                    <AdminLayout path="/class" exact Component={Class} />
                    <AdminLayout path="/class-details" exact Component={ClassDetails} />
                    <AdminLayout path="/series" exact Component={Series} />
                    <AdminLayout path="/series-details" exact Component={SeriesDetails} />
                    <AdminLayout path="/courses" exact Component={Course} />
                    <AdminLayout path="/course-details" exact Component={CourseDetails} />
                    <AdminLayout path="/customer" exact Component={Customer} />
                    <AdminLayout path="/customer-details" exact Component={CustomerDetails} />
                    <AdminLayout path="/role" exact Component={RolePage} />
                    <AdminLayout path="/role-group" exact Component={RoleGroupPage} />
                    <AdminLayout path="/user" exact Component={UserPage} />
                    <AdminLayout path="/" exact Component={Home} />
                    <FormDrawer />
                    <Notification />
                </Router>
            </Provider>
        )
    }
}
