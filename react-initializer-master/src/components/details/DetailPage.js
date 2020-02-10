import React from 'react';
import './DetailPage.scss';

export default function DetailPage(props) {
    return (
        <div className="details-page">
            { props.children }
        </div>
    )
}
