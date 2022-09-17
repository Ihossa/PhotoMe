import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "../redux/rootReducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    // @ts-ignore
))


// @ts-ignore
const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}


export default appWithTranslation(MyApp);


