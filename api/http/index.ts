import axios, {AxiosRequestConfig} from "axios";
import {AuthResponse} from "../dto/authResponse";

export const API_URL = 'https://infinite-peak-41414.herokuapp.com/'

const http = axios.create({
    baseURL: API_URL,
    withCredentials: false,
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

http.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return http.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export {http};