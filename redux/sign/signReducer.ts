import { SET_NOT_FOUND_PROFILE, SET_SENDING_DATA, SIGN_IN} from "./types";
import {IPhotographer} from "../../api/dto/photogapher";

interface IInitialState{
    me?: IPhotographer,
    token?: string,
    isNotFoundUser: boolean,
    isSendingData: boolean
}

const initialState:IInitialState = {
    me: undefined,
    token: undefined,
    isNotFoundUser: false,
    isSendingData: false
}


export const signReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch (action.type){
        case SIGN_IN:
            return { ...state, token: action.payload, isSendingData: false};

        case SET_NOT_FOUND_PROFILE:
            return { ...state, isNotFoundUser: action.payload, isSendingData: false};

        case SET_SENDING_DATA:
            return { ...state, isSendingData: action.payload};

        default: return state
    }
}

export const signInAction = (payload: string) => ({type: SIGN_IN, payload})
export const setNotFoundUser = (payload: boolean) => ({type: SET_NOT_FOUND_PROFILE, payload})
export const setIsSendingDate = (payload: boolean) => ({type: SET_SENDING_DATA, payload})