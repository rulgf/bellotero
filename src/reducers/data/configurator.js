import {
    GET_CONFIGURATOR_SUCCESS,
    GET_CONFIGURATOR_FAILED,
    GET_ESTIMATED_FOOD_COST,
    GET_ESTIMATED_ANNUAL_SAVINGS,
} from '../../constants/actions';
import { estimatedAnualSavings, estimatedFoodCost } from '../../utils/functions';

const initialState = {
    calculator: {},
    estimated: {
        monthSpending: 0,
        employees: 0,
        estimatedFoodCost: 0,
        estimatedAnualSavings: 0,
    },
};

const configuratorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONFIGURATOR_SUCCESS: {
            return {
                ...state,
                calculator: action.payload.calculator,
            }
        }

        case GET_CONFIGURATOR_FAILED: {
            return state;
        }

        case GET_ESTIMATED_FOOD_COST: {
            const estimatedFood = estimatedFoodCost(action.payload.monthSpending);
            return {
                ...state,
                estimated: {
                    ...state.estimated,
                    monthSpending: action.payload.monthSpending,
                    estimatedFoodCost: estimatedFood,
                    estimatedAnualSavings: estimatedAnualSavings(state.estimated.employees, estimatedFood),
                },
            };
        }

        case GET_ESTIMATED_ANNUAL_SAVINGS: {
            return {
                ...state,
                estimated: {
                    ...state.estimated,
                    employees: action.payload.employees,
                    estimatedAnualSavings: estimatedAnualSavings(action.payload.employees, state.estimated.estimatedFoodCost),
                },
            };
        }

        default:
            return state;
    }
};

export default configuratorReducer;
