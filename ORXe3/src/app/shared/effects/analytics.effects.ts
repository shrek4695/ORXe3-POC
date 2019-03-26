import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AnalyticsService } from '../services/analytics.service';
import * as analyticsActions from '../actions/analytics.action';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { eventsList } from '../eventsList.js'
@Injectable()
export class AnalyticsEffect {

    constructor(private actions$: Actions, private analyticsService: AnalyticsService) { }
    analyticData = {};
    getDate(date) {
        let dd = date.getDate();
        if (dd < 10) {
            dd = '0' + dd;
        }
        return dd;
    }

    getMonth(date) {
        let mm = date.getMonth() + 1;
        if (mm < 10) {
            mm = '0' + mm;
        }
        return mm;
    }

    getCurrentDate(date) {
        return this.getDate(date) + '/' + this.getMonth(date) + '/' + date.getFullYear();
    }

    getCurrentHours(date) {
        let hh = date.getHours();
        if (hh < 10) {
            hh = '0' + hh;
        }
        return hh;
    }

    getCurrentMinutes(date) {
        let mins = date.getMinutes(date);
        if (mins < 10) {
            mins = '0' + mins;
        }
        return mins;
    }

    getCurrentSeconds(date) {
        let sec = date.getSeconds(date);
        if (sec < 10) {
            sec = '0' + sec;
        }
        return sec;
    }

    getCurrentTime(date) {
        return this.getCurrentHours(date) + ':' + this.getCurrentMinutes(date) + ':' + this.getCurrentSeconds(date);
    }

    @Effect()
    loadCheckStatus$ = this.actions$.pipe(
        ofType(analyticsActions.AnalyticsActionTypes.AnalyticsDataLoad),
        map((action: analyticsActions.AnalyticsDataLoad) => action.payload),
        exhaustMap((data) => {
            console.log('dump data effects', data);
            let user = eventsList.find(item => item.id == data['id']);
            console.log("events List", user);
            this.analyticData = {
                eventName: user.name,
                eventId: user.id,
                eventDescription: user.description,
                eventData: data['eventData'] === undefined || data['eventData'] == null ? null : data['eventData'],
                sessionId: data['sessionId'],
                date: this.getCurrentDate(data['date']),
                time: this.getCurrentTime(data['date']),
                startTime: data['startTime'],
                error: data['error'] === undefined || data['error'] == null ? null : data['error'],
                errorTime: data['errorTime'] === undefined || data['errorTime'] == null ? 0 : data['errorTime'],
                completionTime: data['completionTime'] === undefined || data['completionTime'] == null ? 0 : data['completionTime']
            }
            return this.analyticsService.dumpData(this.analyticData).pipe(
                map(response => {
                    return (new analyticsActions.AnalyticsDataLoadSuccess(response))
                }),
                catchError(err => {
                    return of(new analyticsActions.AnalyticsDataLoadFail(err))
                })
            )
        })
    );
}