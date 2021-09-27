import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Fonts } from '@themeConfigs/fonts.style';
import theme from '@themeConfigs/theme';
import { GlobalStyle } from '@themeConfigs/global.style';
import MainLayout from '@comp/MainLayout';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps) {
  const [isScroll, setIsScroll] = useState(false);
  const scrollHandler = () => {
    setIsScroll(true);
  };

  return (
    <>
      <Provider store={store}>
        <Fonts />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MainLayout isScroll={isScroll}>
            <main onWheel={scrollHandler}>
              <Component {...pageProps} />
            </main>
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </>
  );
}
export default MyApp;
