import React, { Component } from 'react';
import swal from 'sweetalert';
import Rows from './row/Rows';
import Head from './head/Head';
import Pagination from './pagination/Pagination';
import './Table.scss';

export default class Table extends Component {

    state = {
        listCheked: []
    }

    componentDidMount = () => {
        this.onUnChecked();
    }

    onChecked = (listCheked) => {
        this.setState({ listCheked });
    }

    onUnChecked = () => {
        this.setState({ listCheked: [] });
    }

    deleteMulti = () => {
        swal({
            title: "Thông báo!",
            text: "Bạn có muốn xóa các dòng đã chọn?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const temps = this.state.listCheked.map(x => x.item);
                    this.props.onDeleteMulti(temps);
                    this.onUnChecked();
                }
            });
    }

    onChangePageHandle = (page, size) => {
        this.props.onChangePage(page, size);
        this.onUnChecked();
    }

    onDeleteHandle = (item) => {
        swal({
            title: "Thông báo!",
            text: "Bạn có muốn xóa dòng này?",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.onDelete(item);
                }
            });
    }

    render() {
        const { columns, pageIndex, pageSize, source, totalRow, onUpdate } = this.props;
        const { listCheked } = this.state;
        return (
            <div>
                <table className="table">
                    <thead>
                        <Head columns={columns} />
                    </thead>
                    <tbody>
                        <Rows
                            columns={columns}
                            source={source}
                            listCheked={listCheked}
                            onChecked={this.onChecked}
                            onDelete={this.onDeleteHandle}
                            onUpdate={onUpdate}
                        />
                    </tbody>
                </table>
                <Pagination
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    totalRow={totalRow}
                    onChangePage={this.onChangePageHandle}
                    countCheked={listCheked.length}
                    onUnChecked={this.onUnChecked}
                    deleteMulti={this.deleteMulti}
                />
            </div>
        )
    }
}
