import {combineReducers} from "redux";
import {unAuthReducer} from "./unAuthReducer/unAuthReducer";
import {signReducer} from "./sign/signReducer";

export const rootReducer = combineReducers({
    unAuth: unAuthReducer,
    sign: signReducer
})