import {useTranslation} from 'next-i18next';
import {useRouter} from "next/router";
import {Preloader} from "./Preloader/Preloader";
import {LanguageSelector} from "../../shared/LanguageSelector/LanguageSelector";
import styles from './UnAuth.module.scss'
import Link from 'next/link';
import {ROUTE} from "../../constants/route";
import {BTN_TYPE, Button} from "../../shared/Button";
import {useEffect, useMemo, useRef, useState} from "react";
import {ICON_NAME, Icons} from "../../lib/icons";
import {Title} from "../../shared/Title/Title";
import {getPhotographerUnAuth} from "../../store/unAuthReducer/actions";
import {IUser} from "../../api/dto/photogapher";
import {Footer} from "../Footer/Footer";
import {isArray} from "util";
import {BestPhotographerPhoto} from "./BestPhotographerPhoto/BestPhotographerPhoto";
import {BestPhotographerSwiper} from "./BestPhotographerSwiper/BestPhotographerSwiper";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

export const UnAuthorise = () => {
    const { t } = useTranslation('un-auth');
    const router = useRouter();
    const $mainInfoBlock = useRef(null)
    const [isMainContent, setIsMainContent] = useState(false)
    const dispatch = useAppDispatch();
    const photographer:IUser[] = useAppSelector(state => state.unAuth.photographer)
    const [isPreloader, setIsPreloader] = useState(true)


    const changeMainBackground = (entries: any) => {
        const [entry] = entries;
        setIsMainContent(entry.isIntersecting)
    }

    const options = useMemo(() => ({
        root: null,
        rootMargin: '-300px',
        threshold: 0
    }), [])


    useEffect(() => {
        const observer = new IntersectionObserver(changeMainBackground, options);
        const currentTarget = $mainInfoBlock.current;

        if(currentTarget) observer.observe(currentTarget);

        return () => {
          if(currentTarget) observer.unobserve(currentTarget)
        }

    },[$mainInfoBlock, options])

    const aboutList = useMemo(() => (
        [
            {
                icon: ICON_NAME.ABOUT_SEARCH,
                description: t('un-auth:about-search-description', 'Быстрый и удобный поиск фотографа ')
            },
            {
                icon: ICON_NAME.ABOUT_CREATIVE,
                description: t('un-auth:about-creative-description', 'Талантливые фотографы со всей страны')
            },
            {
                icon: ICON_NAME.ABOUT_ORGANIZATION,
                description: t('un-auth:about-corganize-description', 'Организация фотосессии на свой вкус')
            }
        ]
    ), [])

    useEffect(() => {
        // @ts-ignore
        dispatch(getPhotographerUnAuth())
    },[])

    useEffect(() => {
        setTimeout(() => {setIsPreloader(false)}, 4000)
    },[])

    return(
            <div style={isPreloader ? {height: '100vh', overflow: 'hidden'}:{}} className={!isMainContent?styles['background-light']:styles['background']}>
                {isPreloader && <Preloader />}
                <div className={styles['top-section']}>
                    <section className={styles['wrap-images']}>
                        <img className={styles['top-img']} src={'images/unAuth/top-img.png'} alt={'top-png'} />
                        <img className={styles['right-img']} src={'images/unAuth/right-header.png'} alt={'right-header'} />
                        <img ref={$mainInfoBlock} className={styles['preload-img']} src={'images/unAuth/preload.gif'} alt={'preload'} />
                    </section>
                    <div className={styles['sticky-elements']}>
                        <header className={styles['header']}>
                            <LanguageSelector  />
                            <nav className={styles['navigation']}>
                                <Link href={ROUTE.ALL.SIGN_IN}>
                                    <a className={styles['link-sign']}>
                                        {t('un-auth:sign-in', 'Войти')}
                                    </a>
                                </Link>
                                <Link href={ROUTE.ALL.SIGN_UP}>
                                    <a className={styles['link-sign']}>
                                        {t('un-auth:sign-up', 'Зарегистрироваться')}
                                    </a>
                                </Link>
                            </nav>
                        </header>
                        <h1 className={styles['logo']}>PhotoMey</h1>
                    </div>
                </div>
                <section className={styles['section-info']}>
                    <div className={styles['main-description']}>
                        <div className={styles['card-description']}>
                            <span className={styles['header-about']}>
                                {t('un-auth:card-description-title', 'PhotoMey - это...')}
                            </span>
                            <span className={styles['description-about']}>
                                {t('un-auth:card-description-title', 'Поиск фотографа для вашего праздника. Организация фотосьемки и знакомство с креативными людьми.')}
                            </span>
                            <Button  className={styles['join-btn']} typeBtn={BTN_TYPE.MAIN} onClick={() => {router.push(ROUTE.ALL.SIGN_IN)}}>
                                {t('un-auth:join', 'Присоединиться')}
                            </Button>
                        </div>
                    </div>
                    <img className={styles['img-about']} src={'images/unAuth/about.gif'} alt={'about'} />
                </section>
                <section className={styles['section-benefit']}>
                    <Title title={t('un-auth:benefit', 'Чем полезен PhotoMey?')} />
                    <div className={styles['benefit-list']}>
                        {aboutList.map((benefit) => (
                            <div className={styles['benefit-block']} key={benefit.description}>
                                <Icons className={styles['benefit-icon']} name={benefit.icon} />
                                <span className={styles['benefit-description']}>{benefit.description}</span>
                            </div>
                        ))}
                    </div>
                </section>
                {photographer?.length > 0 && <section className={styles['section-benefit']}>
                    <Title title={t('un-auth:best-photographer', 'Лучшие фотографы на PhotoMey')} />
                    <div className={styles['list-photographer']}>
                        {isArray(photographer) && photographer.map((photographerItem) => (
                               <BestPhotographerPhoto key={photographerItem._id} photographerItem={photographerItem} />
                           ))}
                    </div>
                    <div className={styles['list-photographer-swiper']}>
                        <BestPhotographerSwiper bestPhotographers={photographer} />
                    </div>
                </section>}
                <section className={styles['section-benefit']}>
                    <span className={styles['slogan']}>{t('un-auth:slogan-footer','Творчество внутри PhotoMey')}</span>
                    <Button className={styles['btn-find']} typeBtn={BTN_TYPE.MAIN} onClick={() => {router.push(ROUTE.ALL.SIGN_IN)}} >
                        {t('un-auth:find-photographer','Найти фотографа')}
                    </Button>
                </section>
                <Footer />
            </div>
    )
}