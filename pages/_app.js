import { Provider } from "react-redux";
import store from "../redux/store";

import "@/styles/globals.scss";

import "react-phone-number-input/style.css";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
