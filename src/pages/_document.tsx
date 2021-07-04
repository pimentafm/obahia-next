import Document, { Head, Html, Main, NextScript } from "next/document";
import { SEO } from "../components/SEO";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <title>
          OBahia - Inteligência Territorial e Hídrica para o Oeste da Bahia
        </title>
        <Head>
          <SEO />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
