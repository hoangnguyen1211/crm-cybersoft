import React from 'react';
import { Tag } from 'antd';

export function ClassStatusSwitch(value) {
    switch (value) {
        case 1:
            return <Tag color="#2db7f5">Sắp mở</Tag>
        case 2:
            return <Tag color="#87d068">Đang mở</Tag>
        case 3:
            return <Tag color="#f50">Kết thúc</Tag>
        default:
            return null;
    }
}