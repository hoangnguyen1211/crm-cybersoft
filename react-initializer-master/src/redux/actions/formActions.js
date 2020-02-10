import * as types from '../types/formTypes';

/*=========== FORM THEM MOI ===========*/
export const moFormThemMoiAction = (component, title, model, valids, horizontal = false) => {
    return {
        type: types.MO_FORM_THEM_MOI,
        payload: {
            component,
            title,
            model,
            valids,
            horizontal
        }
    }
}

/*=========== FORM CAP NHAT ===========*/
export const moFormCapNhatAction = (component, title, model, valids, horizontal = false) => {
    return {
        type: types.MO_FORM_CAP_NHAT,
        payload: {
            component,
            title,
            model,
            valids,
            horizontal
        }
    }
}

export const dongFormAction = () => {
    return {
        type: types.DONG_FORM
    }
}