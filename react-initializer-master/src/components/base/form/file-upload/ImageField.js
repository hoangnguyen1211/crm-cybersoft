import React, { useState } from 'react';
import { Upload, Icon, Modal } from 'antd';
import { API_URL_UPLOAD_FILE, API_URL_DOMAIN } from '../../../../configs/UrlConfig';
import '../FormField.scss';
import './FileField.scss';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

export default function ImageField({ required, onChange, label,
    style, className, action, value, ...props }) {

    const { name } = props;
    const [message, setMessage] = useState('');
    const [imageUrl, setImageUrl] = useState(value);
    const [loading, setLoading] = useState(false);

    let classNames = className ? `input-group ${className}` : 'input-group';

    const onChangeHandle = (info) => {
        // let isValid = false;
        // let errorMessage = '';

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => {
                console.log(info.file.response[0])
                setImageUrl(info.file.response[0]);
                setLoading(false);
                onChange(name, info.file.response[0], true);
            });
            return;
        }
    }

    const uploadButton = (
        <div>
            <Icon type={loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Upload</div>
        </div>
    );

    return (
        <div className={classNames} style={style}>
            <div className="title">
                <label>{label}</label>
                <span>{required ? '*' : ''}</span>
            </div>
            <div className="clearfix">
                <Upload
                    {...props}
                    action={`${API_URL_UPLOAD_FILE}/upload`}
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    onChange={onChangeHandle}
                >
                    {imageUrl ? <img src={`${API_URL_DOMAIN}${imageUrl}`} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
            {
                message.length > 0 ? <small>{message}</small> : null
            }
        </div>
    )
}

