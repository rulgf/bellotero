import {
    GET_GLOBALS,
    GET_GLOBALS_SUCCESS,
    GET_GLOBALS_FAILED,
} from '../constants/actions';

export const getGlobals = () => ({
    type: GET_GLOBALS,
});

export const getGlobalsSuccess = (menu = {}) => ({
    type: GET_GLOBALS_SUCCESS,
    payload: {
        menu,
    },
});

export const getGlobalsFailed = (message = '') => ({
    type: GET_GLOBALS_FAILED,
    payload: message
});
