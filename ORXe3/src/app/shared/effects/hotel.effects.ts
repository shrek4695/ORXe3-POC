import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HotelResultsService } from '../services/hotel-results.service';
import * as hotelActions from '../actions/hotel.action';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as appState from '../../shared/interfaces/app.state';
import * as analyticsActions from '../actions/analytics.action';

@Injectable()
export class HotelEffects {
    analyticData = {};

    constructor(private actions$: Actions, private hotelResultsService: HotelResultsService, private store: Store<appState.AppState>) { }

    @Effect()
    loadCheckStatus$ = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.CheckStatusLoad),
        map((action: hotelActions.CheckStatusLoad) => action.payload),
        exhaustMap((data) => {
            this.analyticData = {
                startTime: new Date().getTime(),
                sessionId: data,
                date: new Date(),
                id: 1,
            }
            return this.hotelResultsService.checkHotelStatus(data).pipe(
                map(response => {
                    if (response['status'] == 'Completed') {
                        this.analyticData = {
                            ...this.analyticData,
                            eventData: response['count'],
                            error: null,
                            completionTime: new Date().getTime()
                        };
                        this.store.dispatch(new analyticsActions.AnalyticsDataLoad(this.analyticData));
                        return (new hotelActions.CheckStatusLoadSuccess(response))
                    }
                }),
                catchError(err => {
                    this.analyticData = {
                        ...this.analyticData,
                        error: err['error'],
                        errorTime: new Date().getTime()
                    };
                    this.store.dispatch(new analyticsActions.AnalyticsDataLoad(this.analyticData));
                    return of(new hotelActions.CheckStatusLoadFail(err))
                })
            )
        })
    );

    @Effect()
    loadHotelResults$ = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.HotelResultsLoad),
        map((action: hotelActions.HotelResultsLoad) => action.payload),
        exhaustMap((data) => {
            this.analyticData = {
                startTime: new Date().getTime(),
                sessionId: data,
                date: new Date(),
                id: 2,
            }
            return this.hotelResultsService.getFinalResults(data).pipe(
                map(response => {
                    this.analyticData = {
                        ...this.analyticData,
                        eventData: null,
                        error: null,
                        completionTime: new Date().getTime()
                    };
                    this.store.dispatch(new analyticsActions.AnalyticsDataLoad(this.analyticData));
                    return (new hotelActions.HotelResultsLoadSuccess(response))
                }),
                catchError(err => {
                    this.analyticData = {
                        ...this.analyticData,
                        error: err['error'],
                        errorTime: new Date().getTime()
                    };
                    this.store.dispatch(new analyticsActions.AnalyticsDataLoad(this.analyticData));
                    return of(new hotelActions.HotelResultsLoadFail(err))
                })
            )
        })
    );
}