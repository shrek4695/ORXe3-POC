import { Hotel } from '../interfaces/hotel.state';
import { HotelActions } from '../actions/hotel.action';
import { HotelActionTypes } from '../actions/hotel.action';

export interface HotelState {
    HotelSessionId: String;
    hotels: Hotel[];
    HotelCheckStatus: boolean;
    AnalyticsData: {};
    HotelResultsComplete: boolean;
    SelectedHotel: Hotel;
}

const initialState: HotelState = {
    HotelSessionId: '',
    hotels: [],
    HotelCheckStatus: false,
    AnalyticsData: null,
    HotelResultsComplete: false,
    SelectedHotel: null
}

export function HotelReducer(state: HotelState = initialState, action: HotelActions): HotelState {
    let hotelDetails;
    debugger;
    switch (action.type) {
        case HotelActionTypes.CheckStatusLoadSuccess:
        console.log("succsesss");
            hotelDetails = {
                ...state,
                HotelCheckStatus: action.payload['status'] == 'Completed' ? true : false,
                AnalyticsData: action.payload['analyticData']
            }
            break;
        case HotelActionTypes.HotelResultsLoadSuccess:
            hotelDetails = {
                ...state,
                HotelResultsComplete: true,
                hotels: action.payload['hotels'],
                HotelSessionId: action.payload['sessionId'],
                AnalyticsData: action.payload['analyticData']
            }
            break;
        case HotelActionTypes.HotelResultsLoadFail:
            hotelDetails = {
                ...state,
                AnalyticsData: action.payload['analyticData']
            }
            break;
        case HotelActionTypes.CheckStatusLoadFail:
            hotelDetails = {
                ...state,
                AnalyticsData: action.payload['analyticData']
            }
            break;
        case HotelActionTypes.HotelSelected:
            hotelDetails = {
                ...state,
               SelectedHotel: action.payload['eventData'],
               AnalyticsData: action.payload
            }
            break;
        default:
            hotelDetails = state;
            break;
    }
    return hotelDetails;
}