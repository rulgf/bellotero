import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epics from '../epics';
import { reducers } from '../reducers';

// Create Middlewares
const epicMiddleware = createEpicMiddleware();

// Set initial state
const initialState = {};

// Apply Middleware
const enhancer = compose(
    applyMiddleware(epicMiddleware),
);

// Configure Store
export function configureStore() {
    const store = createStore(
        reducers,
        initialState,
        enhancer,
    );
    epicMiddleware.run(epics);
    return store;
};
