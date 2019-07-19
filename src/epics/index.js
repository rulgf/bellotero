import { combineEpics } from 'redux-observable';

import { getGlobalsEpic } from './globals';
import { getTestimonialsEpic } from './testimonials';

const epics = combineEpics(
    getGlobalsEpic,
    getTestimonialsEpic,
);

export default epics;
