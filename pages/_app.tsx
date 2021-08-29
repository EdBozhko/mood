import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Fonts } from '@themeConfigs/fonts.style';
import theme from '@themeConfigs/theme';
import { GlobalStyle } from '@themeConfigs/global.style';
import MainLayout from '@comp/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  const [isScroll, setIsScroll] = useState(false);
  const scrollHandler = () => {
    setIsScroll(true);
  };

  return (
    <>
      <Fonts />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainLayout isScroll={isScroll}>
          <main onWheel={scrollHandler}>
            <Component {...pageProps} />
          </main>
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
