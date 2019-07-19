import {
    GET_GLOBALS_SUCCESS,
    GET_GLOBALS_FAILED,
    GET_GLOBALS,
    GET_CONFIGURATOR_SUCCESS,
    GET_CONFIGURATOR_FAILED,
    GET_CONFIGURATOR,
    GET_TESTIMONIALS_SUCCESS,
    GET_TESTIMONIALS_FAILED,
    GET_TESTIMONIALS,
} from '../../constants/actions';

const initialState = {
    loading: false,
    errorMessage: '',
};

const globalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONFIGURATOR:
        case GET_TESTIMONIALS:
        case GET_GLOBALS: {
            return {
                ...state,
                loading: true,
            }
        }

        case GET_CONFIGURATOR_SUCCESS:
        case GET_TESTIMONIALS_SUCCESS:
        case GET_GLOBALS_SUCCESS: {
            return {
                ...state,
                loading: false
            }
        }

        case GET_CONFIGURATOR_FAILED:
        case GET_TESTIMONIALS_FAILED:
        case GET_GLOBALS_FAILED: {
            return {
                ...state,
                errorMessage: action.payload,
                loading: false,
            };
        }

        default:
            return state;
    }
};

export default globalsReducer;
