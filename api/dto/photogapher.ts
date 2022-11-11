export interface IUser {
    addFunctionality: string[]
    avatar?:{
        file: any
    }
    experience?: string
    locationWork?: number
    countLike?: number
    createdAt: string
    email: string
    fullName: string
    isPhotograph: boolean
    lastSeen: Date
    password: string
    photoshootsTypes: string[]
    price: number[]
    savedPhotos: string[]
    savedUser: string[]
    updatedAt: Date
    userName: string
    __v: number
    _id: string
}