import { SessionIdActions, SessionIdActionTypes } from '../actions/sessionId.action';

export interface SessionState {
    SessionId: String
}

export function SessionIdReducer(state: SessionState, action: SessionIdActions):SessionState {
    let sessionId;
    switch (action.type) {
        case SessionIdActionTypes.SetSessionId:
            sessionId = {
                SessionId : action.payload
            }
            break;
        default:
            sessionId = state;
            break;
    }
    return sessionId;
}