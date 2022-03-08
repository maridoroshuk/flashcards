import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Kanit&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </body>
    </>
  );
}

export default App;
