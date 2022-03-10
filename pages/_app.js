import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";
import store from "../store";
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
          <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </Provider>
        </SessionProvider>
      </body>
    </>
  );
}

export default App;
