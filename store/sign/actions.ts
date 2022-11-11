import AuthService from "../../api/controller/signIn/signIn";
import {ILogin, IRegistration} from "../../api/controller/signIn/signInInterface";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'login',
    async ({email, password}: ILogin) => {
        const response = await AuthService.login(email, password);
        console.log(response)
        localStorage.setItem('token', response.data.accessToken);
        return response.data.user;
})

export const registration = createAsyncThunk(
    'signIn',
    async (data: IRegistration) => {
    try {
        const response = await AuthService.registration(data);
        await localStorage.setItem('token', response.data.accessToken);
        return response.data.user
    } catch (err){
        console.error(err)
    }
})
//
// export const logout = () =>  {
//     try {
//         const response = await AuthService.logout();
//         localStorage.removeItem('token');
//         this.setAuth(false);
//         this.setUser({} as IUser);
//     } catch (e) {
//         console.log(e.response?.data?.message);
//     }
// }
//
// export const checkAuth() {
//     this.setLoading(true);
//     try {
//         const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
//         console.log(response);
//         localStorage.setItem('token', response.data.accessToken);
//         this.setAuth(true);
//         this.setUser(response.data.user);
//     } catch (e) {
//         console.log(e.response?.data?.message);
//     } finally {
//         this.setLoading(false);
//     }
// }
//
// export const signIn = async (dispatch:any, login: string, password: string) => {
//     const resp = await AuthService.login(login, password)
//     if(resp.status === STATUS_REQUEST.ERROR){
//         dispatch(setNotFoundUser(true))
//     }else {
//         dispatch(signInAction(resp.data.token))
//     }
// }

