import { Action } from '@ngrx/store';
import { Hotel } from '../interfaces/hotel.state';

export enum HotelActionTypes {
    CheckStatusLoad = '[Hotels] Check Status Load',
    CheckStatusLoadSuccess = '[Hotels] Check Status Load Success',
    CheckStatusLoadFail = '[Hotels] Check Status Load Fail',
    HotelResultsLoad = '[Hotels] Hotel Results Load',
    HotelResultsLoadSuccess = '[Hotels] Hotel Results Load Success',
    HotelResultsLoadFail = '[Hotels] Hotel Results Load Fail',
    HotelSelected = '[Hotels] Hotel Selected'
}

export class CheckStatusLoad implements Action {
    readonly type = HotelActionTypes.CheckStatusLoad;
    constructor(public payload: String) { }
}

export class CheckStatusLoadSuccess implements Action {
    readonly type = HotelActionTypes.CheckStatusLoadSuccess;
    constructor(public payload: Object) { }
}

export class CheckStatusLoadFail implements Action {
    readonly type = HotelActionTypes.CheckStatusLoadFail;
    constructor(public payload: String) { }
}

export class HotelResultsLoad implements Action {
    readonly type = HotelActionTypes.HotelResultsLoad;
    constructor(public payload: String) { }
}

export class HotelResultsLoadSuccess implements Action {
    readonly type = HotelActionTypes.HotelResultsLoadSuccess;
    constructor(public payload: Object) { }
}

export class HotelResultsLoadFail implements Action {
    readonly type = HotelActionTypes.HotelResultsLoadFail;
    constructor(public payload: String) { }
}

export class HotelSelected implements Action {
    readonly type = HotelActionTypes.HotelSelected;
    constructor(public payload: Object) { }
}

export type HotelActions = CheckStatusLoad 
                        | CheckStatusLoadSuccess 
                        | CheckStatusLoadFail 
                        | HotelResultsLoad
                        | HotelResultsLoadSuccess
                        | HotelResultsLoadFail 
                        | HotelSelected ;
