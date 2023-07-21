import '../styles/globals.css';
import Head from 'next/head';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>William Dreyer Dev JS/React</title>
      </Head>
      <Component {...pageProps} />
      </I18nextProvider>
  );
}

export default App;
