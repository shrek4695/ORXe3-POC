import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as hotelActions from '../actions/hotel.action';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ServiceUtilitiesService } from '../services/service-utilities.service';
let _analyticData = {};

@Injectable()
export class HotelEffects {
    private dataObs$ = new Subject();
    hotelcheckStatusUrl = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/status';
    hotelresultsUrl = 'https://hotel-loyalty.stage.cnxloyalty.com/hotel/v1.0/search/results';
    headerData = new HttpHeaders({
        "cnx-correlationid": "01ed866c-156e-497c-b2e5-2e40b26a9bc2",
        "cnx-userip": "127.0.0.1",
        "cnx-tenantid": "2qiohrc1jb4",
        "Content-Type": "application/json",
        "Accept-Language": "en-US",
        "crossDomain": "true"
    });
    bodyData;
    resourceKey: String;

    constructor(private actions$: Actions, private serviceUtilities: ServiceUtilitiesService) { }

    checkStatusSuccessCallback(response) {
        debugger;
        console.log('ress', response);
        if (response['status'] == 'Completed') {
            _analyticData = {
                ..._analyticData,
                eventData: response['count'],
                error: null,
                completionTime: new Date().getTime()
            };
            response = {
                ...response,
                analyticData: _analyticData
            }
            return (new hotelActions.CheckStatusLoadSuccess(response))
        }
    }

    checkStatusErrorCallback(err) {
        debugger;
        _analyticData = {
            ..._analyticData,
            error: err['error'],
            errorTime: new Date().getTime()
        };
        err = {
            ...err,
            analyticData: _analyticData
        }
        return of(new hotelActions.CheckStatusLoadFail(err))
    }

    hotelresultsSuccessCallback(response) {
        _analyticData = {
            ..._analyticData,
            eventData: null,
            error: null,
            completionTime: new Date().getTime()
        };
        response = {
            ...response,
            analyticData: _analyticData
        }
        return (new hotelActions.HotelResultsLoadSuccess(response))
    }

    hotelresultsErrorCallback(err) {
        _analyticData = {
            ..._analyticData,
            error: err['error'],
            errorTime: new Date().getTime()
        };
        err = {
            ...err,
            analyticData: _analyticData
        }
        return of(new hotelActions.HotelResultsLoadFail(err))
    }

    @Effect()
    loadCheckStatus$ = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.CheckStatusLoad),
        map((action: hotelActions.CheckStatusLoad) => action.payload),
        exhaustMap((data) => {
            this.resourceKey = 'hotelStatus'
            _analyticData = {
                startTime: new Date().getTime(),
                sessionId: data,
                date: new Date(),
                id: 1,
            };
            this.bodyData = {
                "sessionId": data
            };
            debugger;
            return this.serviceUtilities.Post(this.hotelcheckStatusUrl,
                this.bodyData,
                this.headerData,
                this.checkStatusSuccessCallback,
                this.checkStatusErrorCallback,
                this.resourceKey)
        })
    );

    @Effect()
    loadHotelResults$ = this.actions$.pipe(
        ofType(hotelActions.HotelActionTypes.HotelResultsLoad),
        map((action: hotelActions.HotelResultsLoad) => action.payload),
        exhaustMap((data) => {
            _analyticData = {
                startTime: new Date().getTime(),
                sessionId: data,
                date: new Date(),
                id: 2,
            }
            this.resourceKey = 'hotelResults';
            this.bodyData = {
                "sessionId": data,
                "paging": {
                    "pageNo": 1,
                    "pageSize": 10,
                    "orderBy": "price asc, rating desc"
                },
                "currency": "USD",
                "contentPrefs": [
                    "All"
                ],
                "filters": {
                    "minHotelPrice": 1,
                    "maxHotelPrice": 10000,
                    "minHotelRating": 1,
                    "maxHotelRating": 5,
                    "hotelChains": [
                        "Novotel",
                        "Marriott",
                        "Hilton",
                        "Accor"
                    ],
                    "allowedCountry": "FR"
                },
                "customerInfo": {
                    "id": "103_3067683670",
                    "availablePointBalance": 70000
                }
            };
            debugger;
            return this.serviceUtilities.Post(this.hotelresultsUrl,
                this.bodyData,
                this.headerData,
                this.hotelresultsSuccessCallback,
                this.hotelresultsErrorCallback,
                this.resourceKey)
        })
    );
}