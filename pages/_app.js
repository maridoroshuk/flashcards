import Head from "next/head";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function App({ Component, pageProps: {...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Kanit&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </body>
    </>
  );
}

export default App;
