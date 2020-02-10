import React from 'react';

export default function StepBarItem(props) {
    const { active, label } = props;
    const className = active ? 'step-bar_item active' : 'step-bar_item';

    return (
        <div className={className}>
            <span>{label}</span>
            <div className="item_arrow"></div>
        </div>
    )
}
