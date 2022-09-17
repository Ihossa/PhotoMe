import {UnAuthCtrl} from "../api/controller/unAuth/unAuth";
import {fetchPhotographerAction} from "./unAuthReducer/unAuthReducer";
import {SignIn} from "../api/controller/signIn/signIn";
import {setNotFoundUser, signInAction} from "./sign/signReducer";
import {STATUS_REQUEST} from "../api/status";


export const getPhotographerUnAuth = () => {
    return async (dispatch: any) => {
        const resp = await UnAuthCtrl.getPhotographer()
        await dispatch(fetchPhotographerAction(resp.data.listUser))
    }
}

export const signIn = async (dispatch:any, login: string, password: string) => {
    const resp = await SignIn.login(login, password)
    if(resp.data.status === STATUS_REQUEST.ERROR){
        dispatch(setNotFoundUser(true))
    }else {
        dispatch(signInAction(resp.data.token))
    }
}

