import React, { Fragment } from 'react';

export default function Head(props) {
    const { columns } = props;
    return (
        <Fragment>
            <tr>
                <th>#</th>
                {
                    columns.map((item, index) => {
                        return <th key={index}>{item.title}</th>;
                    })
                }
                <th>Hành động</th>
            </tr>
        </Fragment>
    )
}
