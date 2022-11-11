import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import {Provider} from "react-redux";
import {setupStore} from "../store/store";




// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={setupStore()}>
        <Component {...pageProps} />
      </Provider>
  )
}


export default appWithTranslation(MyApp);


