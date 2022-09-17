import {UN_AUTH_PHOTOGRAPHER_FETCH} from "./types";
import {IPhotographer} from "../../api/dto/photogapher";

interface IInitialState{
    photographers: IPhotographer[]
}

const initialState:IInitialState = {
    photographers: []
}


export const unAuthReducer = (state = initialState, action: {type: string, payload: any}) => {
    switch (action.type){
        case UN_AUTH_PHOTOGRAPHER_FETCH:
            return { ...state, photographers: action.payload};
        default: return state
    }
}

export const fetchPhotographerAction = (payload: IPhotographer[]) => ({type: UN_AUTH_PHOTOGRAPHER_FETCH, payload})