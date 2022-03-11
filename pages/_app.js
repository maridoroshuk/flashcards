import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
        <DndProvider backend={HTML5Backend}>
          <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </Provider>
          </DndProvider>
        </SessionProvider>
      </body>
    </>
  );
}

export default App;
