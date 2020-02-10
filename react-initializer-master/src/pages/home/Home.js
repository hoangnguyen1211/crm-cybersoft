import React, { Component } from 'react';
import { Icon } from '@material-ui/core'
import { DragSortable, SortableItem } from '../../components/base/drag-drop';
import './Home.scss';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, tenChuong: 'Chương 01' },
                { id: 2, tenChuong: 'Chương 02' },
                { id: 3, tenChuong: 'Chương 03' },
                { id: 4, tenChuong: 'Chương 04' },
                { id: 5, tenChuong: 'Chương 05' }
            ]
        };
    }

    onDragEnd = (items) => {
        console.log(items)
        this.setState({ items })
    }

    render() {
        return (
            <DragSortable items={this.state.items} onDragEnd={this.onDragEnd} droppableId="droppable">
                {
                    this.state.items.map((item, index) => (
                        <SortableItem key={index} draggableId={`item-${index}`} index={index}>
                            <div className="course-list-item">
                                <div className="course-list-item_name">{item.tenChuong}</div>
                                <div className="course-list-item_action">
                                    <a><Icon>post_add</Icon></a>
                                    <a><Icon>edit</Icon></a>
                                    <a><Icon>delete_forever</Icon></a>
                                </div>
                            </div>
                        </SortableItem>
                    ))
                }
            </DragSortable>
        )
    }
}
