import {ROUTE} from "../../../constants/route";
import styles from "./BestPhotographerPhoto.module.scss";
import {ICON_NAME, Icons} from "../../../lib/icons";
import {Trans} from "next-i18next";
import {useRouter} from "next/router";
import {IUser} from "../../../api/dto/photogapher";

interface IBestPhotographerPhoto {
    photographerItem:IUser
}

export const BestPhotographerPhoto = (props: IBestPhotographerPhoto) => {

    const router = useRouter()

    return (
        <div onClick={() => {router.push(ROUTE.ALL.SIGN_IN)}} className={styles['wrap-card-photographer']} key={props.photographerItem._id}>
            {props.photographerItem.avatar?.file ?
                <img className={styles['img-avatar']} src={props.photographerItem.avatar.file} alt={props.photographerItem.fullName} />:
                <img className={styles['img-avatar']} src={'images/unAuth/avatar.png'} alt={'avatar'}/>
            }
            <div className={styles['block-info']}>
                <div className={styles['top-section']}>
                    {props.photographerItem.locationWork && <div className={styles['wrap-location']}>
                        <Icons color={'white'} className={styles['icon']} name={ICON_NAME.LOCATION} />
                        <span className={styles['text-count']}>{props.photographerItem.locationWork}</span>
                    </div>}
                    <div className={styles['wrap-like']}>
                        <Icons color={'white'} className={styles['icon']} name={ICON_NAME.LIKE} />
                        <span className={styles['text-count']}>{props.photographerItem.countLike}4</span>
                    </div>
                </div>
                <div className={styles['bottom-section']}>
                    <span className={styles['name']}>{props.photographerItem.fullName}</span>
                    {props.photographerItem.experience &&
                        <span className={styles['experience']}>
                            <Trans
                                key={'un-auth:photographer-experience'}
                                default={'Опыт работы <1>countAge</1> года'}
                                values={{countAge: props.photographerItem.experience}}
                            >{`Опыт работы ${props.photographerItem.experience} года`}</Trans>
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}