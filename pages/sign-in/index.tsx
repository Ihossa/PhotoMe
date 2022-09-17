import * as React from 'react';
import {SignInForm} from "../../components/SignInForm/SignInForm";
import {Container} from "../../shared/Container/Container";
import {Logo} from "../../shared/Logo/Logo";
import {LanguageSelector} from "../../shared/LanguageSelector/LanguageSelector";
import styles from './sign-in.module.scss'
import {MetaTags} from "../../shared/MetaTag";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {t} from "i18next";
import {SupportBlock} from "../../components/Footer/SupportBlock/SupportBlock";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

function SignIn(){

    return (
        <>
            <MetaTags title={t('sign-in:enter', 'Вход')} />
            <Container>
                <div className={styles['wrap-header']}>
                    <Logo className={styles['logo']} />
                    <LanguageSelector />
                </div>
            </Container>
            <Container>
                <SignInForm />
            </Container>
            <SupportBlock />
        </>
    );
};

export default SignIn;

// @ts-ignore
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["sign-in"]))
        }
    };
}


