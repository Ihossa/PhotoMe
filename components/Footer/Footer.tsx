import styles from './Footer.module.scss'


import {useTranslation} from "next-i18next";
import Link from 'next/link';
import {SupportBlock} from "./SupportBlock/SupportBlock";

export const Footer = () => {
    const { t } = useTranslation('un-auth');

    return (
        <footer className={styles['wrap-footer']}>
            <div className={styles['content-info']}>
                <div className={styles['contacts']}>
                    <span className={styles['label']}>
                        {t('un-auth:contacts', 'Контакты:')}
                    </span>
                    <div className={styles['email']}>
                        <span>{t('un-auth:email', 'E-mail:')}</span>
                        <span>photomeyproduction@gmail.com</span>
                    </div>
                    <div className={styles['phone']}>
                        <span>{t('un-auth:phone', 'Телефон:')}</span>
                        <span>+38 (067) 527 43 97</span>
                    </div>
                </div>
                <div className={styles['socials']}>
                    <span className={styles['subscribe']}>{t('un-auth:subscribe', 'Подписывайся на нас:')}</span>
                    <div className={styles['list-social']}>
                            <a target={'_blank'}  href={'https://www.instagram.com/'} rel="noreferrer">
                                <img className={styles['img-social']} src={'images/unAuth/social/instagram.svg'} alt={'instagram'} />
                            </a>
                            <a target={'_blank'} href={'https://www.facebook.com/'} rel="noreferrer">
                                <img className={styles['img-social']} src={'images/unAuth/social/facebook.svg'} alt={'facebook'} />
                            </a>
                            <a target={'_blank'} href={'https://www.linkedin.com/'} rel="noreferrer">
                                <img className={styles['img-social']} src={'images/unAuth/social/linkedin.svg'} alt={'linkedin'} />
                            </a>
                    </div>
                </div>
            </div>
            <SupportBlock />
        </footer>
    )
}