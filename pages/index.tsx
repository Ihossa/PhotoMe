import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {UnAuthorise} from "../components/UnAuthorise/UnAuthorise";

export default function Home() {
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