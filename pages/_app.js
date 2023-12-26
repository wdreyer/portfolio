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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NFRYWZPG1F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NFRYWZPG1F');
</script>
      <Component {...pageProps} />
      </I18nextProvider>
  );
}

export default App;
