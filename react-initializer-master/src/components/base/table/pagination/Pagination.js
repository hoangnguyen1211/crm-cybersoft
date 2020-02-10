import React, { Fragment } from 'react';
import { Icon } from '@material-ui/core';
import { Select } from 'antd';
import './Pagination.scss';

const sizes = [10, 20, 30, 50, 100, 5, 2];
export default function Pagination(props) {
    const { pageIndex, pageSize, totalRow, countCheked, onUnChecked, deleteMulti, onChangePage } = props;

    const totalPage = totalRow ? Math.ceil(totalRow / pageSize) : 0;
    const onChangePageIndex = (value) => {
        onChangePage(value, pageSize);
    }

    const onChangePageSize = (value) => {
        const total = Math.ceil(totalRow / value);
        const page = pageIndex > total ? 1 : pageIndex;
        onChangePage(page, value);
    }

    const renderPage = () => {
        if (totalPage === 0) return null;
        let temp = [];
        for (let i = 0; i < totalPage; i++) {
            temp.push(<Select.Option key={i} value={i + 1}>{i + 1}</Select.Option>)
        }
        return temp;
    }

    const renderSize = () => {
        return sizes.map((item, index) => {
            return <Select.Option key={index + 1} value={item.toString()}>{item}</Select.Option>;
        })
    }

    const onUnCheckedAll = () => {
        onUnChecked();
    }

    const onDelete = () => {
        deleteMulti();
    }

    return (
        <div className="pagination flex-items-center">
            <div className="del-multi">
                <div style={{ display: countCheked > 0 ? 'flex' : 'none' }}>
                    <span>{countCheked} dòng đã được chọn!</span>
                    <button onClick={onDelete}>Xóa</button>
                    <button onClick={onUnCheckedAll}>Bỏ chọn</button>
                </div>
            </div>
            <div className="pagging">
                <div className="left flex-items-center">
                    <span>Size: </span>
                    <Select
                        style={{ width:40 }}
                        defaultValue={20}
                        onChange={onChangePageSize}
                        value={pageSize}
                    >
                        {renderSize()}
                    </Select>
                </div>
                <div className="middle flex-items-center">
                    <span>Page: </span>
                    <Select
                        style={{ width: 40 }}
                        defaultValue={1}
                        onChange={onChangePageIndex}
                        value={pageIndex}
                    >
                        {renderPage()}
                    </Select>
                    <span> of {totalPage}</span>
                </div>
                <div className="right flex-items-center" defaultValue={pageIndex}>
                    {
                        pageIndex > 1 ? <Fragment>
                            <a onClick={() => onChangePageIndex(1)}><Icon>first_page</Icon></a>
                            <a onClick={() => onChangePageIndex(pageIndex - 1)}><Icon>navigate_before</Icon></a>
                        </Fragment> : <Fragment>
                                <a className="disabled"><Icon>first_page</Icon></a>
                                <a className="disabled"><Icon>navigate_before</Icon></a>
                            </Fragment>
                    }
                    {
                        pageIndex < totalPage ? <Fragment>
                            <a onClick={() => onChangePageIndex(pageIndex + 1)}><Icon>navigate_next</Icon></a>
                            <a onClick={() => onChangePageIndex(totalPage)}><Icon>last_page</Icon></a>
                        </Fragment> : <Fragment>
                                <a className="disabled"><Icon>navigate_next</Icon></a>
                                <a className="disabled"><Icon>last_page</Icon></a>
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}
