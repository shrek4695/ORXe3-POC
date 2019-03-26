import { AnalyticsActions, AnalyticsActionTypes } from '../actions/analytics.action';

// export interface AnalyticsState {
//     eventName: String,
//     sessionId: String,
//     date: String,
//     time: String,
//     startTime: number,
//     eventData: {},
//     error: {},
//     errorTime: number,
//     completionTime: number
// }

// const initialState: AnalyticsState = {
//     eventName: '',
//     sessionId: '',
//     date: '',
//     time: '',
//     startTime: 0,
//     eventData: null,
//     error: null,
//     errorTime: 0,
//     completionTime: 0
// }

export function AnalyticsReducer(state, action: AnalyticsActions) {
    let analyticsData;
    switch (action.type) {
        case AnalyticsActionTypes.AnalyticsDataLoadSuccess:
            console.log('Data Dumped Successfully');
            analyticsData = {
                ...state
            }
            break;
        case AnalyticsActionTypes.AnalyticsDataLoadFail:
            console.log('Data Dumping Failed', action.payload);
            analyticsData = {
                ...state
            }
            break;
        default:
            analyticsData = state;
            break;
    }
    return analyticsData;
}