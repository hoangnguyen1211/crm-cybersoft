import React, { Component } from 'react';
import { Icon } from '@material-ui/core';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import * as formActions from '../../../redux/actions/formActions';
import './FormDrawer.scss';

class FormDrawer extends Component {

    state = {
        type: '',
        model: {},
        valids: [],
        status: false
    }

    static getDerivedStateFromProps(props, state) {
        const { type, model, valids, open } = props.formReducer;
        if (!state.status && open)
            return {
                ...state,
                type,
                model,
                valids,
                status: true
            };
        else if (state.status && !open) {
            return {
                ...state,
                type,
                model: {},
                valids: [],
                status: false
            }
        }
        return null;

    }

    onChangeInput = (name, value, status) => {
        let valids = this.state.valids;
        if (status)
            valids = valids.filter(x => x !== name);
        else if (valids.findIndex(x => x === name) === -1) {
            valids.push(name);
        }

        this.setState({
            valids,
            model: {
                ...this.state.model,
                [name]: value
            }
        });
    }

    onClose = () => {
        this.props.closeForm();
        this.setState({
            status: false
        })
    }

    render() {
        const { type, model, valids } = this.state;
        const { horizontal, title, Component, open } = this.props.formReducer;
        const classNames = horizontal ? 'horizontal content' : 'content';
        return (
            <Drawer
                className="form-drawer"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={open}
            >
                <div className="form-body">
                    <div className="header flex-items-center">
                        <h6>{title}</h6>
                        <a className="flex-items-center" onClick={this.onClose}>
                            <Icon>clear</Icon>
                        </a>
                    </div>
                    <div className={classNames}>
                        {
                            open ? <Component
                                onChangeInput={this.onChangeInput}
                                type={type}
                                model={model}
                                valids={valids}
                            /> : null
                        }
                    </div>
                </div>
            </Drawer>
        )
    }
}

function mapStateToProps(state) {
    return {
        formReducer: state.formReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        closeForm() {
            dispatch(formActions.dongFormAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDrawer);




