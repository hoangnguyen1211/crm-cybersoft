import React, { useState } from 'react';
import { Radio } from 'antd';
import '../FormField.scss';

const Group = Radio.Group;

export default function RadioField({required, label, className, style, onChange, value, ...props}) {

    const { name } = props;
    const [dataChecked, setDataChecked] = useState(value ? value : {});

    const onChangeHandle = e => {
        const checked = props.options.find(x => x.value === e.target.value);
        setDataChecked(checked.value);
        onChange(name, checked.value, true);
    };

    const renderRadio = () => {
        return props.options.map((item, index) => <Radio key={index} value={item.value}>{item.label}</Radio>);
    }

    let classNames = className ? `input-group ${className}` : 'input-group';

    return (
        <div className={classNames} style={style}>
            <div className="title">
                <label>{label}</label>
                <span>{required ? '*' : ''}</span>
            </div>
            <Group onChange={onChangeHandle} value={dataChecked} {...props}>
                {
                    renderRadio()
                }
            </Group>
        </div>
    )
}
