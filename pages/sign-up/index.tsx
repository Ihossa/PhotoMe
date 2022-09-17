import * as React from 'react';
import {Container} from "../../shared/Container/Container";
import {Logo} from "../../shared/Logo/Logo";
import {LanguageSelector} from "../../shared/LanguageSelector/LanguageSelector";
import styles from './sign-up.module.scss'
import {MetaTags} from "../../shared/MetaTag";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {t} from "i18next";
import {SupportBlock} from "../../components/Footer/SupportBlock/SupportBlock";
import {SignUpForm} from "../../components/SignUpForm/SignUpForm";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

function SignUp(){

    return (
        <>
            <MetaTags title={t('sign-in:registration', 'Регистрация')} />
            <Container>
                <div className={styles['wrap-header']}>
                    <Logo />
                    <LanguageSelector />
                </div>
            </Container>
            <Container>
                <SignUpForm />
            </Container>
            <SupportBlock />
        </>
    );
};

export default SignUp;

// @ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["sign-in"]))
        }
    };
}


