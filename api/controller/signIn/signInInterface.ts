export interface IRegistration{
    userName: string,
    fullName: string,
    email: string,
    password: string,
    isPhotograph: boolean
}

export interface ILogin {
    email: string,
    password: string,
}