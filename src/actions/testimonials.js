import {
    GET_TESTIMONIALS,
    GET_TESTIMONIALS_FAILED,
    GET_TESTIMONIALS_SUCCESS,
} from '../constants/actions';

export const getTestimonials = () => ({
    type: GET_TESTIMONIALS,
});

export const getTestimonialsSuccess = (slider = {}) => ({
    type: GET_TESTIMONIALS_SUCCESS,
    payload: {
        slider,
    },
});

export const getTestimonialsFailed = (message = '') => ({
    type: GET_TESTIMONIALS_FAILED,
    payload: message
});
