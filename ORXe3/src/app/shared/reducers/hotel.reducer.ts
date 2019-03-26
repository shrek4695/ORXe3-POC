import { Hotel } from '../interfaces/hotel.state';
import { HotelActions } from '../actions/hotel.action';
import { HotelActionTypes } from '../actions/hotel.action';

export interface HotelState {
    HotelSessionId: String;
    hotels: Hotel[];
    HotelCheckStatus: boolean;
    HotelResultsComplete: boolean;
}

const initialState: HotelState = {
    HotelSessionId: '',
    hotels: [],
    HotelCheckStatus: false,
    HotelResultsComplete: false
}

export function HotelReducer(state: HotelState = initialState, action: HotelActions): HotelState {
    let hotelDetails;
    switch (action.type) {
        case HotelActionTypes.SearchHotel:
            hotelDetails = {
                ...state,
                HotelSessionId: action.payload
            };
            break;
        case HotelActionTypes.CheckStatusLoadSuccess:
            console.log("Check Status", action.payload)
            hotelDetails = {
                ...state,
                HotelCheckStatus: action.payload['status'] == 'Completed' ? true : false
            }
            break;
        case HotelActionTypes.HotelResultsLoadSuccess:
            console.log("Hotel Results", action.payload)
            hotelDetails = {
                ...state,
                HotelResultsComplete: true,
                hotels: action.payload['hotels'],
                HotelSessionId: action.payload['sessionId']
            }
            break;
        case HotelActionTypes.HotelResultsLoadFail:
            console.log("Hotel Results Fail", action.payload)
            hotelDetails = {
                ...state
            }
            break;
        case HotelActionTypes.CheckStatusLoadFail:
            console.log("Check Status Fail", action.payload)
            hotelDetails = {
                ...state
            }
            break;
        default:
            hotelDetails = state;
            break;
    }
    return hotelDetails;
}