import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';;
import Script from 'next/script';

import { useRouter } from 'next/router';
import MmascoPageLayout from '../src/layout';



const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);
    const handleError = () => setErr(true);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);
  }, [router]);



  return (
    <>

      <Head>
        <title>Mmasco</title>
        <meta name="viewport" content='initial-scale=1, width=device-width' />
        <meta name="keywords" content="Guesthouse, Guest house, Best Guesthouse in Richards Bay, Best BnB in Meerensee, meer en see, rooms to let" />
        <meta name="robots" content="all" />
        {/* <link rel="canonical" href={`https://nqabanqaba.netlify.app${router.pathname}`}></link> */}
        <meta name="author" content="Mfaniseni Bukhosini" />
      </Head>
      <MmascoPageLayout>
        <Component {...pageProps} />
      </MmascoPageLayout>

      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=G-283WECMC8C`} />
      <Script strategy='afterInteractive'
        id="mmasco"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-283WECMC8C');
          `}
      </Script>
    </>
  )
}

export default App
