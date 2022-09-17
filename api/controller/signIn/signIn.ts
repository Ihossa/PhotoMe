import {http} from "../../http";
import {IResultToken} from "../../dto/photogapher";

export const SignIn = {
    login: (login: string, password: string) => {
        const params = {
            email: login,
            password: password
        }

        return http.post<IResultToken>('/user/login', params)
    }
}