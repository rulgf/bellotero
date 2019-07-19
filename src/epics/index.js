import { combineEpics } from 'redux-observable';

import { getGlobalsEpic } from './globals';

const epics = combineEpics(
    getGlobalsEpic,
);

export default epics;
