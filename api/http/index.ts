import axios from "axios";

export const http = axios.create({
    baseURL: 'https://infinite-peak-41414.herokuapp.com/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'},
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});