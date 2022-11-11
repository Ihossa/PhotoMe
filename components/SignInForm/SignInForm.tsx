import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import styles from './SignInForm.module.scss'
import {useTranslation} from 'react-i18next';
import {ICON_NAME, Icons} from "../../lib/icons";
import {BTN_TYPE, Button} from "../../shared/Button";
import Link from 'next/link';
import {ROUTE} from "../../constants/route";
import {LoadingSpinner} from "../../shared/LoadingSpinner/LoadingSpinner";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {login} from "../../store/sign/actions";
import {signUser} from "../../store/sign/signReducer";

export const SignInForm = () => {

    const { t } = useTranslation('sign-in');
    const [isVisiblePassword, changeVisiblePassword ] = useState(false);
    const dispatch = useAppDispatch();
    const {user, error, isLoading} = useAppSelector(state => state.signUser)
    const {clearErrors} = signUser.actions


    console.log(user, error, isLoading)

    return (
        <div className={styles['wrap-form']}>
            <h1 className={styles['title-header']}>{t('sign-in:enter', 'Вход')}</h1>
            {error && <span className={styles['error']}>{t('sign-in:error-not-found', 'Пользаватель не найден')}</span>}

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email(t('sign-in:wrong-email', 'неправельный емейл'))
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    password: Yup.string()
                        .min(6, t('sign-in:min-length', 'Минимальное количество символов 6'))
                        .required(t('sign-in:error-required', 'обязательное поле')),
                })}
                onSubmit={async (values, { validateForm }) => {
                    await validateForm()
                    await dispatch(login(values))
                }}
            >
                <Form className={styles['form']}>
                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="email">{t('sign-in:login', 'E-mail')}</label>
                        <Field onInput={() => {dispatch(clearErrors)}} className={styles['input']} name="email" type="email" />
                        <span className={styles['label-error']}><ErrorMessage name="email" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="password">{t('sign-in:password', 'Пароль')}</label>
                        <div className={styles['wrap-input']}>
                            <Field onInput={() => {dispatch(clearErrors)}} className={styles['input']} name="password" type={isVisiblePassword?"text":'password'} />
                            <Icons onClick={() => {changeVisiblePassword(!isVisiblePassword)}} className={styles['icon-visible']} name={isVisiblePassword?ICON_NAME.VISIBLE_KEY:ICON_NAME.NOT_VISIBLE_KEY}/>
                        </div>
                        <span className={styles['label-error']}><ErrorMessage name="password" /></span>
                    </div>
                    <Button disabled={false} onClick={() => {}} typeBtn={BTN_TYPE.MAIN} className={styles['btn-submit']} >{isLoading?<LoadingSpinner />:t('sign-in:enter', 'Войти')}</Button>
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