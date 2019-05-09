import { Action } from '@ngrx/store';

export enum SessionIdActionTypes {
    SetSessionId = '[SessionId] Set Session Id'
}

export class SetSessionId implements Action {
    readonly type = SessionIdActionTypes.SetSessionId;
    constructor(public payload: String) { }
}

export type SessionIdActions = SetSessionId;
