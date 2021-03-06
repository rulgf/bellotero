import { ActionsObservable as Observable } from 'redux-observable';
import axios from 'axios';
import { ofType } from 'redux-observable';
import { throttleTime, flatMap, catchError } from 'rxjs/operators';
import {
    GET_GLOBALS,
} from '../constants/actions';
import { getGlobalsSuccess, getGlobalsFailed } from '../actions/globals';
import { globalsURL } from '../constants/urls';

export const getGlobalsEpic = (action$, store) => action$.pipe(
    ofType(GET_GLOBALS),
    throttleTime(1000),
    flatMap(() => {
        return Observable.from(axios.get(globalsURL)).pipe(
            flatMap(({ data: { menu } }) => {
                return Observable.of(getGlobalsSuccess(menu));
            }),
            catchError(() => Observable.of(getGlobalsFailed('Oops... an error occured please try again later'))),
        )
    }),
);