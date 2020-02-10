import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { DateFormat } from '../../../../util'
import '../FormField.scss';

const dateFormat = 'DD-MM-YYYY';

export default function DateField({ required, onChange, label, 
    style, className, mode, value, ...props }) {

    const { name } = props;
    const [message, setMessage] = useState("");
    const [dateValue, setDateValue] = useState(value ? moment(new Date(value), dateFormat) : null);

    let classNames = className ? `input-group ${className}` : 'input-group';

    const onChangeHandle = (date, dateString) => {
        let isValid = false;
        let errorMessage = '';
        
        if (required && dateString.length === 0) {
            errorMessage = `${label} không được bỏ trống!`;
            isValid = false;
        }
        else{
            errorMessage = ``;
            isValid = true;
        }

        setMessage(errorMessage);  
        if(mode === "date")
            onChange(name, new Date(date), isValid);
        else{
            let temp = DateFormat(date);
            onChange(name, temp, isValid);
        }
        setDateValue(date);      
    }

    return (
        <div className={classNames} style={style}>
            <div className="title">
                <label>{label}</label>
                <span>{required ? '*' : ''}</span>
            </div>
            <DatePicker 
                {...props} 
                onChange={onChangeHandle} 
                placeholder={label}
                format={dateFormat}
                value={dateValue}
            />
            {
                message.length > 0 ? <small>{message}</small> : null
            }
        </div>
    )
}
