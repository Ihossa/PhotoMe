import {useEffect, useMemo, useRef, useState} from "react";
import {ICON_NAME, Icons} from "../../lib/icons";
import styles from './LanguageSelector.module.scss'

interface IOption {
    label: string
    value: string
}

interface ILanguageSelector{
    defaultLanguage?: string|null
}

export const LanguageSelector = (props: ILanguageSelector) => {
    const [currentLanguage, setCurrentLanguage] = useState(props.defaultLanguage)
    const [isOpenSelect, changeOpenSelect] = useState(false)
    const $selector = useRef(null)

    useEffect(function() {
        const getterLanguage = window.localStorage.getItem('language')
        if(getterLanguage){
            const currentOption = optionsLanguage.find(option => option.value === getterLanguage)
            setCurrentLanguage(currentOption?.label);
        }
    },[]);

    const optionsLanguage = useMemo<IOption[]>(() =>
        [
            {
                label: 'Мова',
                value: 'ua',
            },
            {
                label: 'Язык',
                value: 'ru',
            },
            {
                label: 'Language',
                value: 'uk',
            }
        ]
        , [])

    const changeLanguage = (language: string) => {
        localStorage.setItem('language', language)
        const currentOption = optionsLanguage.find(option => option.value === language)
        setCurrentLanguage(currentOption?.label)
        changeOpenSelect(false)
    }

    useEffect(() => {
        document.addEventListener('click', event => {
            // @ts-ignore
            if (!$selector.current?.contains(event.target)) {
                changeOpenSelect(false);
            }
        });
    }, []);


    return(
        <div ref={$selector} className={styles['wrap-selector']}>
            <div onClick={() => {changeOpenSelect(!isOpenSelect)}} className={styles['header-drop']}>
                <span className={styles['chosen-label']}>{currentLanguage || optionsLanguage[0].label}</span>
                <Icons name={ICON_NAME.ARROW_DOWN} />
            </div>
            {isOpenSelect && <div className={styles['content-drop']}>
                {optionsLanguage.map((language) =>
                    <span className={styles['option']} key={language.value} onClick={() => changeLanguage(language.value)}>{language.label}</span>
                )}
            </div>}
        </div>
    )
}