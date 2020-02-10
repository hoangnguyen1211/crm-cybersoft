import React, { Fragment } from 'react';
import { Checkbox } from 'antd';
import { Icon } from '@material-ui/core';
import Columns from '../column/Columns';

export default function Rows(props) {

    const { columns, source, listCheked, onChecked, onDelete, onUpdate } = props;

    const onChange = (e, index) => {
        let temps = listCheked;
        if (e.target.checked && temps.findIndex(x => x.order === index) === -1) {
            temps.push({ order: index, item: source[index] });
        }
        else if (!e.target.checked && temps.findIndex(x => x.order === index) !== -1) {
            temps = temps.filter(x => x.order !== index);
        }
        onChecked(temps);
    }

    const onRemove = (index) => {
        onDelete(index);
    }

    const onEdit = (index) => {
        onUpdate(index);
    }

    return (
        <Fragment>
            {
                source.map((item, index) => {
                    return <tr key={index}>
                        <td>
                            <Checkbox
                                checked={listCheked.findIndex(x => x.order === index) !== -1}
                                onChange={(e) => onChange(e, index)}
                            />
                        </td>
                        <Columns
                            columns={columns}
                            rowItem={item}
                        />
                        <td>
                            <div className="table-action">
                                <button type="button" onClick={() => onEdit(item)}>
                                    <Icon>create</Icon>
                                </button>
                                <button type="button" onClick={() => onRemove(item)}>
                                    <Icon>delete_forever</Icon>
                                </button>
                            </div>
                        </td>
                    </tr>
                })
            }
        </Fragment>
    )
}
