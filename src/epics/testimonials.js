import { ActionsObservable as Observable } from 'redux-observable';
import axios from 'axios';
import { ofType } from 'redux-observable';
import { throttleTime, flatMap, catchError } from 'rxjs/operators';
import {
    GET_TESTIMONIALS,
} from '../constants/actions';
import { getTestimonialsSuccess, getTestimonialsFailed } from '../actions/testimonials';
import { testimonialsURL } from '../constants/urls';

export const getTestimonialsEpic = (action$, store) => action$.pipe(
    ofType(GET_TESTIMONIALS),
    throttleTime(1000),
    flatMap(() => {
        return Observable.from(axios.get(testimonialsURL)).pipe(
            flatMap(({ data: { slider } }) => {
                return Observable.of(getTestimonialsSuccess(slider));
            }),
            catchError(() => Observable.of(getTestimonialsFailed('Oops... an error occured please try again later'))),
        )
    }),
);