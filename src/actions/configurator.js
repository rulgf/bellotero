import {
    GET_CONFIGURATOR,
    GET_CONFIGURATOR_SUCCESS,
    GET_CONFIGURATOR_FAILED,
    GET_ESTIMATED_FOOD_COST,
    GET_ESTIMATED_ANNUAL_SAVINGS,
} from '../constants/actions';

export const getConfigurator = () => ({
    type: GET_CONFIGURATOR,
});

export const getConfiguratorSuccess = (calculator = {}) => ({
    type: GET_CONFIGURATOR_SUCCESS,
    payload: {
        calculator,
    },
});

export const getConfiguratorFailed = (message = '') => ({
    type: GET_CONFIGURATOR_FAILED,
    payload: message
});

export const getEstimatedFoodCost = (monthSpending = 0) => ({
    type: GET_ESTIMATED_FOOD_COST,
    payload: {
        monthSpending,
    },
});

export const getEstimatedAnnualSavings = (employees = 0) => ({
    type: GET_ESTIMATED_ANNUAL_SAVINGS,
    payload: {
        employees,
    },
});
