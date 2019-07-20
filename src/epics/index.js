import { combineEpics } from 'redux-observable';

import { getGlobalsEpic } from './globals';
import { getTestimonialsEpic } from './testimonials';
import { getConfiguratorEpic } from './configurator';

const epics = combineEpics(
    getGlobalsEpic,
    getTestimonialsEpic,
    getConfiguratorEpic,
);

export default epics;
