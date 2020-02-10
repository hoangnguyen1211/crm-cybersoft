import React, { useState, Fragment } from 'react';
import { Select } from 'antd';
import '../FormField.scss';
import './SelectField.scss';

const Option = Select.Option;

export default function SelectField({ required, value, onChange, label, style, options, className, ...props }) {
    const { name } = props;
    const [message, setMessage] = useState('');

    let classNames = className ? `input-group ${className}` : 'input-group';

    const onChangeHandle = (value) => {
        let isValid = false;
        let errorMessage = '';

        if (required && value.length === 0) {
            errorMessage = `${label} chưa được chọn!`;
            isValid = false;
        }
        else {
            errorMessage = ``;
            isValid = true;
        }
        setMessage(errorMessage);
        onChange(name, value, isValid)
    }

    return (
        <div className={classNames} style={style}>
            <div className="title">
                <label>{label}</label>
                <span>{required ? '*' : ''}</span>
            </div>
            <Select
                {...props}
                style={{ width: '100%' }}
                placeholder={label}
                onChange={onChangeHandle}
                value={`${value}`}
            >
                {
                    options ? options.map((item, index) => {
                        return <Option key={item.value}>{item.label}</Option>
                    }) : null
                }
            </Select>
            {
                message.length > 0 ? <small>{message}</small> : null
            }
        </div>
    )
}
