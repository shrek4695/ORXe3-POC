import { Action } from '@ngrx/store';

export enum AnalyticsActionTypes {
    AnalyticsDataLoad = '[Analytics] Analytics Data Load',
    AnalyticsDataLoadSuccess = '[Analytics] Analytics Data Load Success',
    AnalyticsDataLoadFail = '[Analytics] Analytics Data Load Fail'
}

export class AnalyticsDataLoad implements Action {
    readonly type = AnalyticsActionTypes.AnalyticsDataLoad;
    constructor(public payload: Object) { }
}

export class AnalyticsDataLoadSuccess implements Action {
    readonly type = AnalyticsActionTypes.AnalyticsDataLoadSuccess;
    constructor(public payload: Object) { }
}

export class AnalyticsDataLoadFail implements Action {
    readonly type = AnalyticsActionTypes.AnalyticsDataLoadFail;
    constructor(public payload: Object) { }
}

export type AnalyticsActions =  AnalyticsDataLoad
                               |AnalyticsDataLoadSuccess
                               |AnalyticsDataLoadFail;
