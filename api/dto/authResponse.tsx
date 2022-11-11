import {IUser} from "./photogapher";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}