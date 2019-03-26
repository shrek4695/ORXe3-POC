import { Action } from '@ngrx/store';
import { Hotel } from '../interfaces/hotel.state';

export enum HotelActionTypes {
    SearchHotel = '[Hotel] Search Hotels',
    CheckStatusLoad = '[Hotels] Check Status Load',
    CheckStatusLoadSuccess = '[Hotels] Check Status Load Success',
    CheckStatusLoadFail = '[Hotels] Check Status Load Fail',
    HotelResultsLoad = '[Hotels] Hotel Results Load',
    HotelResultsLoadSuccess = '[Hotels] Hotel Results Load Success',
    HotelResultsLoadFail = '[Hotels] Hotel Results Load Fail'
}

export class SearchHotel implements Action {
    readonly type = HotelActionTypes.SearchHotel;
    constructor(public payload: Hotel[]) { }
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

export type HotelActions = SearchHotel
                        | CheckStatusLoad 
                        | CheckStatusLoadSuccess 
                        | CheckStatusLoadFail 
                        | HotelResultsLoad
                        | HotelResultsLoadSuccess
                        | HotelResultsLoadFail ;
