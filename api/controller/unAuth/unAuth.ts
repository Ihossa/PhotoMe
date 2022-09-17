import {http} from "../../http";
import {IPhotographer} from "../../dto/photogapher";

export const UnAuthCtrl = {
    getPhotographer: () => {
        return http.get<{listUser: IPhotographer[]}>('/')
    }
}