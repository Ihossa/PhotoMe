import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from "./index";

const MyApp = () => {
  return <Home />
}

// @ts-ignore
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['unAuth']))
  }
});

export default appWithTranslation(MyApp);


