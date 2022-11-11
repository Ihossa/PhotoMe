import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {UnAuthorise} from "../components/UnAuthorise/UnAuthorise";
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        const myProfile = localStorage.getItem('token')
        console.log(myProfile)
    }, [])

    return (
        <UnAuthorise />
    );
}

// @ts-ignore
export async function getStaticProps({ locale }) {

    return {
        props: {
            ...(await serverSideTranslations(locale, ["un-auth"]))
        }
    };
}