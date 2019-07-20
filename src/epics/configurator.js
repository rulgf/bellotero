import { ActionsObservable as Observable } from 'redux-observable';
import axios from 'axios';
import { ofType } from 'redux-observable';
import { throttleTime, flatMap, catchError } from 'rxjs/operators';
import {
    GET_CONFIGURATOR,
} from '../constants/actions';
import { getConfiguratorSuccess, getConfiguratorFailed } from '../actions/configurator';
import { configuratorURL } from '../constants/urls';

export const getConfiguratorEpic = (action$, store) => action$.pipe(
    ofType(GET_CONFIGURATOR),
    throttleTime(1000),
    flatMap(() => {
        return Observable.from(axios.get(configuratorURL)).pipe(
            flatMap(({ data: { calculator } }) => {
                return Observable.of(getConfiguratorSuccess(calculator));
            }),
            catchError(() => Observable.of(getConfiguratorFailed('Oops... an error occured please try again later'))),
        )
    }),
);