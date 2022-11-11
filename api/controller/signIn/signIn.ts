import {AxiosResponse} from 'axios';
import {http} from "../../http";
import {AuthResponse} from "../../dto/authResponse";
import {IRegistration} from "./signInInterface";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return http.post<AuthResponse>('/user/login', {email, password})
    }

    static async registration(data: IRegistration): Promise<AxiosResponse<AuthResponse>> {
        return http.post<AuthResponse>('/sign-up', data)
    }

    static async logout(): Promise<void> {
        return http.post('/logout')
    }

}