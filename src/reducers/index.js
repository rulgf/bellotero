import { combineReducers } from 'redux';
import * as names from '../constants/reducers';

import DataGlobals from './data/global';

const reducersJson = {};

reducersJson[names.DATA_GLOBALS] = DataGlobals;

export const reducers = combineReducers(reducersJson);
export default reducers;
