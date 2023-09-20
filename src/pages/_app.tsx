import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import Head from 'next/head'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" /> 
      </Head>
      <main className={`font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
