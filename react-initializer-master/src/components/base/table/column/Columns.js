import React, { Fragment } from 'react';

export default function Column(props) {
    const { columns, rowItem } = props;

    const renderItem = (item) => {
        if (item.callback) {
            return <a onClick={() => item.callback(rowItem)}>
                {
                    item.func ? item.func(rowItem[item.key]) : rowItem[item.key]
                }
            </a>
        }
        return <p>
            { item.func ? item.func(rowItem[item.key]) : rowItem[item.key] }
        </p>;
    }

    return (
        <Fragment>
            {
                columns.map((item, index) => {
                    return <td key={index}>
                        {renderItem(item)}
                    </td>
                })
            }
        </Fragment>
    )
}
