import * as types from "../types/formTypes";

const initialState = {
    type: '',
    Component: null,
    title: '',
    model: {},
    valids: [],
    horizontal: false,
    open: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.MO_FORM_THEM_MOI:
            return {
                ...state,
                type: 'ADD',
                Component: action.payload.component,
                title: action.payload.title,
                model: action.payload.model,
                valids: action.payload.valids,
                horizontal: action.payload.horizontal,
                open: true
            }
        case types.MO_FORM_CAP_NHAT:
            return {
                ...state,
                type: 'EDIT',
                Component: action.payload.component,
                title: action.payload.title,
                model: action.payload.model,
                valids: action.payload.valids,
                horizontal: action.payload.horizontal,
                open: true
            }
        case types.DONG_FORM:
            return {
                ...state,
                type: '',
                Component: null,
                open: false
            }
        default:
            return state
    }
}