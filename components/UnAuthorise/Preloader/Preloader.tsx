import styles from './Preloader.module.scss'
import {useTranslation} from "next-i18next";

export const Preloader = () => {
    const { t } = useTranslation('un-auth');


    return (
        <div className={styles['preload']}>
            <img className={styles['img-preload']} src={'images/unAuth/preload.gif'} alt={'preload'}/>
            <h1 className={styles['title']}>{t('un-auth:preload-title-1', 'Красота')}</h1>
            <h1 className={styles['title-2']}>{t('un-auth:preload-title-4', 'вместе с...')}</h1>
            <h1 className={styles['title-3']}>{t('un-auth:preload-title-3', 'смотрящего')}</h1>
            <h1 className={styles['title-4']}>{t('un-auth:preload-title-2', 'в глазах')}</h1>
        </div>
    )
}