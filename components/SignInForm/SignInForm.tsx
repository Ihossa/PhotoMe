import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'
import {useTranslation} from 'react-i18next';
import {ICON_NAME, Icons} from "../../lib/icons";
import {BTN_TYPE, Button} from "../../shared/Button";
import Link from 'next/link';
import {ROUTE} from "../../constants/route";
import {signIn} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {setIsSendingDate, setNotFoundUser} from "../../redux/sign/signReducer";
import {LoadingSpinner} from "../../shared/LoadingSpinner/LoadingSpinner";

export const SignInForm = () => {

    const { t } = useTranslation('sign-in');
    const [isVisiblePassword, changeVisiblePassword ] = useState(false);
    const dispatch = useDispatch();
    const [isNotFoundProfile, isSendingData] = useSelector((state: any) => [state.sign.isNotFoundUser, state.sign.isSendingData])

    const resetNotFoundError = () => {
        if(isNotFoundProfile) dispatch(setNotFoundUser(false))
    }


    return (
        <div className={styles['wrap-form']}>
            <h1 className={styles['title-header']}>{t('sign-in:enter', 'Вход')}</h1>
            {isNotFoundProfile && <span className={styles['error']}>{t('sign-in:error-not-found', 'Пользаватель не найден')}</span>}

            <Formik
                initialValues={{ login: '', password: '' }}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    password: Yup.string()
                        .min(6, t('sign-in:min-length', 'Минимальное количество символов 6'))
                        .required(t('sign-in:error-required', 'обязательное поле')),
                })}
                onSubmit={async (values, { validateForm }) => {
                    await validateForm()
                    dispatch(setIsSendingDate(true))
                    await signIn(dispatch, values.login, values.password)
                }}
            >
                <Form className={styles['form']}>
                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="login">{t('sign-in:login', 'Логин или e-mail')}</label>
                        <Field onInput={resetNotFoundError} className={styles['input']} name="login" type="text" />
                        <span className={styles['label-error']}><ErrorMessage name="login" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="password">{t('sign-in:password', 'Пароль')}</label>
                        <div className={styles['wrap-input']}>
                            <Field onInput={resetNotFoundError} className={styles['input']} name="password" type={isVisiblePassword?"text":'password'} />
                            <Icons onClick={() => {changeVisiblePassword(!isVisiblePassword)}} className={styles['icon-visible']} name={isVisiblePassword?ICON_NAME.VISIBLE_KEY:ICON_NAME.NOT_VISIBLE_KEY}/>
                        </div>
                        <span className={styles['label-error']}><ErrorMessage name="password" /></span>
                    </div>
                    <Button disabled={isSendingData} onClick={() => {}} typeBtn={BTN_TYPE.MAIN} className={styles['btn-submit']} >{isSendingData?<LoadingSpinner />:t('sign-in:enter', 'Войти')}</Button>
                    <Link href={ROUTE.ALL.SIGN_UP}>
                        <a className={styles['register']}>
                            {t('sign-in:no-account', 'Вы еще не зарегистрированы?')}
                        </a>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};