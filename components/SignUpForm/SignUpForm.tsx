import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import styles from './SignUpForm.module.scss'
import {useTranslation} from 'react-i18next';
import {ICON_NAME, Icons} from "../../lib/icons";
import {BTN_TYPE, Button} from "../../shared/Button";
import Link from 'next/link';
import {ROUTE} from "../../constants/route";

enum ROLE {
    PHOTOGRAPHER = 'photographer',
    CLIENT = 'client'
}

export const SignUpForm = (props: {}) => {

    const { t } = useTranslation('sign-in');
    const [isVisiblePassword, changeVisiblePassword ] = useState(false);
    const [isVisiblePasswordAgain, changeVisiblePasswordAgain ] = useState(false);



    return (
        <div className={styles['wrap-form']}>
            <h1 className={styles['title-header']}>{t('sign-in:registration', 'Регистрация')}</h1>
            {/*<span className={styles['error']}>{t('sign-in:error-not-found', 'Пользаватель не найден')}</span>*/}

            <Formik
                initialValues={{name: '', login: '', email: '', password: '', passwordLast: '', role: ROLE.PHOTOGRAPHER }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    login: Yup.string()
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    email: Yup.string()
                        .email(t('email:error-email', 'неверный емейл'))
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    password: Yup.string()
                        .min(6, t('sign-in:min-length', 'Минимальное количество символов 6'))
                        .required(t('sign-in:error-required', 'обязательное поле')),
                    passwordLast: Yup.string()
                        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
                        .required(t('sign-in:error-required', 'обязательное поле')),
                })}
                onSubmit={async (values, { validateForm,  setSubmitting }) => {
                    await validateForm()
                    console.log(values)
                }}
            >
                <Form className={styles['form']}>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="name">{t('sign-in:name', 'Имя')}</label>
                        <Field className={styles['input']} name="name" type="text" />
                        <span className={styles['label-error']}><ErrorMessage name="name" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="login">{t('sign-in:login-up', 'Логин')}</label>
                        <Field className={styles['input']} name="login" type="text" />
                        <span className={styles['label-error']}><ErrorMessage name="login" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="email">{t('sign-in:email', 'E-mail ')}</label>
                        <Field className={styles['input']} name="email" type="text" />
                        <span className={styles['label-error']}><ErrorMessage name="email" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="password">{t('sign-in:password', 'Пароль')}</label>
                        <div className={styles['wrap-input']}>
                            <Field className={styles['input']} name="password" type={isVisiblePassword?"text":'password'} />
                            <Icons onClick={() => {changeVisiblePassword(!isVisiblePassword)}} className={styles['icon-visible']} name={isVisiblePassword?ICON_NAME.VISIBLE_KEY:ICON_NAME.NOT_VISIBLE_KEY}/>
                        </div>
                        <span className={styles['label-error']}><ErrorMessage name="password" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="passwordLast">{t('sign-in:password-again', 'Повторите пароль')}</label>
                        <div className={styles['wrap-input']}>
                            <Field className={styles['input']} name="passwordLast" type={isVisiblePasswordAgain?"text":'password'} />
                            <Icons onClick={() => {changeVisiblePasswordAgain(!isVisiblePasswordAgain)}} className={styles['icon-visible']} name={isVisiblePasswordAgain?ICON_NAME.VISIBLE_KEY:ICON_NAME.NOT_VISIBLE_KEY}/>
                        </div>
                        <span className={styles['label-error']}><ErrorMessage name="passwordLast" /></span>
                    </div>

                    <div className={styles['wrap-field']}>
                        <label className={styles['label']} htmlFor="passwordLast">{t('sign-in:password-again', 'Повторите пароль')}</label>
                        <div className={styles['wrap-input-radio']}>
                            <div className={styles['wrap-radio']}>
                                <Field type={'radio'} defaultChecked={true} name="role" value={ROLE.PHOTOGRAPHER} id="photographer" className={styles['radio']}/>
                                <label htmlFor="photographer">{t('sign-in:photographer', 'Фотограф')}</label>
                            </div>
                            <div className={styles['wrap-radio']}>
                                <Field type={'radio'} name="role" value={ROLE.CLIENT} id="client" className={styles['radio']}/>
                                <label  htmlFor="client">{t('sign-in:client', 'Клиент')}</label>
                            </div>
                        </div>
                    </div>

                    <Button onClick={() => {}} typeBtn={BTN_TYPE.MAIN} className={styles['btn-submit']} >{t('sign-in:registration', 'Зпрегестрироваться')}</Button>
                    <Link href={ROUTE.ALL.SIGN_IN}>
                        <a className={styles['register']}>
                            {t('sign-in:have-account', 'Уже есть аккаунт?')}
                        </a>
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};