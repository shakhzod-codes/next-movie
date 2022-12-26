import Head from "next/head";
import Layout from "../components/layout";
import { MovieContextProvider } from "../context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PcariMovie</title>
        <meta name="description" content="Online cinema" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MovieContextProvider>
    </>
  );
}

export default MyApp;
