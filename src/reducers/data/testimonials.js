import { GET_TESTIMONIALS_SUCCESS, GET_TESTIMONIALS_FAILED } from '../../constants/actions';

const initialState = {
    slider: {},
};

const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TESTIMONIALS_SUCCESS: {
            return {
                ...state,
                slider: action.payload.slider,
            }
        }

        case GET_TESTIMONIALS_FAILED: {
            return state;
        }

        default:
            return state;
    }
};

export default testimonialsReducer;
