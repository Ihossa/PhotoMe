import {http} from "../../http";
import {IUser} from "../../dto/photogapher";

export const UnAuthCtrl = {
    getPhotographer: () => {
        return http.get<{listUser: IUser[]}>('/')
    }
}