import React, { useState } from 'react';
import '../FormField.scss';

export default function TextField({ 
        required, min, max, pattern, compare,
        onChange, label, style, className, type,
        ...props 
    }) {
    const { name } = props;
    const [message, setMessage] = useState('');

    let classNames = className ? `input-group ${className}` : 'input-group';

    const regEmail = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    const regNumber = new RegExp("^[0-9]*$");

    const onChangeHandle = (event) => {
        const value = event.target.value;
        let isValid = false;
        let errorMessage = '';

        if (required && value.length === 0) {
            errorMessage = `${label} không được bỏ trống!`;
            isValid = false;
        }
        else if(type === 'email' && !regEmail.test(value)){
            errorMessage = `Email không đúng định dạng!`;
            isValid = false;
        }
        else if(type === 'number' && !regNumber.test(value)){
            errorMessage = `${label} phải là ký tự số!`;
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
        else if(pattern && !regPattern.test(value)){
            errorMessage = `${label} không đúng định dạng!`;
            isValid = false;
        }
        else if(compare && compare !== value){
            errorMessage = `${label} không khớp!`;
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
            <input
                {...props}
                onChange={onChangeHandle}
                placeholder={label}
            />
            {
                message.length > 0 ? <small>{message}</small> : null
            }
        </div>
    )
}
