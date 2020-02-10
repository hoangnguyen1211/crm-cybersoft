import React, { useState } from 'react';
import '../FormField.scss';

export default function AreaField({ 
        required, min, max, onChange,
        label, style,
        ...props 
    }) {
    const { className, name, rows } = props;
    const [message, setMessage] = useState('');

    let classNames = className ? `input-group ${className}` : 'input-group';

    const onChangeHandle = (event) => {
        const value = event.target.value;
        let isValid = false;
        let errorMessage = '';

        if (required && value.length === 0) {
            errorMessage = `${label} không được bỏ trống!`;
            isValid = false;
        }
        else if(min && value.length < min){
            errorMessage = `${label} ít nhất ${min} ký tự!`;
                isValid = false;
        }
        else if(max && value.length > max){
            errorMessage = `${label} tối đa ${max} ký tự!`;
            isValid = false;
        }
        else{
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
            <textarea
                {...props}
                rows={ rows ? rows : 6 }
                onChange={onChangeHandle}
                placeholder={label}
            ></textarea>
            {
                message.length > 0 ? <small>{message}</small> : null
            }
        </div>
    )
}