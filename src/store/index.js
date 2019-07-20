import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import epics from '../epics';
import { reducers } from '../reducers';

// Create Middlewares
const epicMiddleware = createEpicMiddleware();

// Set initial state
const initialState = {};

// Configure Store
export function configureStore() {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(epicMiddleware),
        )
    );
    epicMiddleware.run(epics);
    return store;
};
