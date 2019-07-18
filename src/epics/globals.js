import { ActionsObservable as Observable } from 'redux-observable';
import axios from 'axios';
import { ofType } from 'redux-observable';
import { throttleTime, flatMap } from 'rxjs/operators';
import {
    GET_GLOBALS,
} from '../constants/actions';
import { getGlobalsSuccess, getGlobalsFailed } from '../actions/globals';

export const getGlobalsEpic = (action$, store) => action$.pipe(
    ofType(GET_GLOBALS),
    throttleTime(1000),
    flatMap(() => {
        return Observable.fromPromise(axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json'))
        .flatMap(({ menu }) => Observable.concat(
                Observable.of(getGlobalsSuccess(menu)),
            ),
        )
        .catch(() => Observable.of(getGlobalsFailed('Oops... an error occured please try again later')));
    }),
);