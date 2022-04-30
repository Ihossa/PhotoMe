import Link from "next/link";
import {useTranslation} from 'next-i18next';

import {ICON_NAME, Icons} from "../../lib/icons";

import styles from './UnAuthorise.module.scss'
import {ContentContainer} from "../../shared/ContentContainer";
import {BTN_TYPE, Button} from "../../shared/Button";

export const UnAuthorise = () => {

    const { t } = useTranslation('un-auth');

    return(
        <>
            <section className={styles['first-section']}>
                <ContentContainer>
                    <header className={styles['header']}>
                        <div className={styles['header-right-part']}>
                            <Icons  className={styles['icon-logo']} name={ICON_NAME.LOGO} />
                            <h1 className={styles['logo-title']}>PhotoMe</h1>
                        </div>
                        <div className={styles['header-links']}>
                            <Link href={'#'}>
                                <a className={styles['header-link']}>
                                    {t('un-auth:enter', 'Ввойти')}
                                </a>
                            </Link>
                            <Link  href={'#'}>
                                <a className={styles['header-link']}>
                                    {t('un-auth:registration', 'Зарегистрироваться')}
                                </a>
                            </Link>
                        </div>
                    </header>
                    <div className={styles['top-content']}>
                        <div className={styles['left-part']}>
                            <span className={styles['title']}>{t('un-auth:top-section-title', 'PhotoMe  - is... ')}</span>
                            <span className={styles['description']}>
                                {t('un-auth:top-section-description-1', 'Мост, соединяющий фотографа и моделей.\n' +
                                'Теперь организовать фотосессию можно в пару кликов, стоит только выбрать среди наших пользователей.\n'
                                )}<br/>
                                  {t('un-auth:top-section-description-2',
                                      'Мы помогаем воплотить в жизнь твои крутые идеи.'
                                  )}<br/>
                                  {t('un-auth:top-section-description-3',
                                      'Присоединяйся, знакомся с креативными ребятами и воплощай в жизнь свои крутые идеи.'
                                  )}<br/>
                                    {t('un-auth:top-section-description-4',
                                        'Создавай мир вместе с PhotoMe.'
                                    )}
                            </span>
                            <Button className={styles['btn-join']} type={BTN_TYPE.MAIN}>
                                {t('un-auth:join', 'Присойдениться')}
                            </Button>
                        </div>
                        <div>
                            <div className={styles['polaroid']}>
                                <img src = {'images/unAuth/polaroid.png'} alt = {'polaroid-photo'} />
                                <span className={styles['polaroid-text']}>{t('un-auth:polaroid-title', 'красота в глазах смотрящего')}</span>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            </section>
        </>
    )
}