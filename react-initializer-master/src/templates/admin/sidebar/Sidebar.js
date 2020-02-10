import React from 'react';
import { LinkItem } from '../../../components/sidebar';
import './Sidebar.scss';

export default function Sidebar(props) {
    const { toogle } = props;

    return (
        <div className={toogle ? 'sidebar open' : 'sidebar'}>
            <div className="logo">
                <div className="img-box">
                    <img src="http://crm.myclass.vn/assets/images/MIN-OP1.png" />
                </div>
            </div>
            <div>
                <LinkItem link="/" iconName="home" title="DASHBOARD" />
                <LinkItem link="/series" iconName="library_books" title="Lộ trình" />
                <LinkItem link="/class" iconName="school" title="Lớp học" />
                <LinkItem link="/courses" iconName="post_add" title="Khóa học" />
                <LinkItem link="/" iconName="list_alt" title="Thời khóa biểu" />
                <LinkItem link="/" iconName="query_builder" title="Sự kiện" />
                <LinkItem link="/" iconName="file_copy" title="Thu ngân" />
                <LinkItem link="/" iconName="dvr" title="Kế toán" />
                <LinkItem link="/customer" iconName="contact_mail" title="Khách hàng" />
                <LinkItem link="/user" iconName="person" title="Người dùng" />
                <LinkItem link="/role-group" iconName="how_to_reg" title="Nhóm quyền" />
                <LinkItem link="/role" iconName="lock" title="Quyền" />
            </div>
        </div>
    )
}

