import React from 'react';

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';
// import MainLayout from '@comp/MainLayout';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="uk">
        <Head>
          <link rel="preload" href="/fonts/Blogger_Sans/Blogger_Sans_Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Blogger_Sans/Blogger_Sans_Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Quicksand/Quicksand-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Quicksand/Quicksand-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Head>
        <body>
          <noscript>
            You need to enable JavaScript to run this app.
            <br />
            Щоб запустити цю програму, потрібно ввімкнути JavaScript.
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
