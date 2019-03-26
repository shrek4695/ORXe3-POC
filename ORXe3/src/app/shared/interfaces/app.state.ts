import { HotelState } from '../reducers/hotel.reducer';
import { SessionState } from '../reducers/sessionId.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    hotels : HotelState,
    SessionId : SessionState
}

const getSessionIdFeatureState = createFeatureSelector<SessionState>('SessionId');

export const getSessionId = createSelector(
    getSessionIdFeatureState,
    state => state.SessionId
);

const getHotelFeatureState = createFeatureSelector<HotelState>('hotels');

export const getHotelCheckStatus = createSelector(
    getHotelFeatureState,
    state => state.HotelCheckStatus
);

export const getHotelResultsStatus = createSelector(
    getHotelFeatureState,
    state => state.HotelResultsComplete
);

export const getHotel = createSelector(
    getHotelFeatureState,
    state => state.hotels
);