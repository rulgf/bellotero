import { GET_GLOBALS_SUCCESS, GET_GLOBALS_FAILED } from '../../constants/actions';

const initialState = {
    globals: {},
};

const globalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GLOBALS_SUCCESS: {
            return {
                ...state,
                globals: action.payload.menu,
            }
        }

        case GET_GLOBALS_FAILED: {
            return state;
        }

        default:
            return state;
    }
};

export default globalsReducer;
