import { combineReducers } from 'redux';
import * as names from '../constants/reducers';

import UIapp from './ui/app';
import DataGlobals from './data/global';
import DataTestimonials from './data/testimonials';
import DataConfigurator from './data/configurator';

const reducersJson = {};

reducersJson[names.UI_APP] = UIapp;
reducersJson[names.DATA_GLOBALS] = DataGlobals;
reducersJson[names.DATA_TESTIMONIALS] = DataTestimonials;
reducersJson[names.DATA_CONFIGURATOR] = DataConfigurator;

export const reducers = combineReducers(reducersJson);
export default reducers;
