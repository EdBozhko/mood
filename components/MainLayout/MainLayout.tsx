import React, { FC } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';
import Preloader from '@comp/Preloader';
import ScrollIcon from '@comp/ScrollIcon';

const data = {
  title: 'Готові розпочати проект?',
  subtitle: 'Замовте безкоштовну консультацію',
};

interface MainLayoutProps {
  isScroll?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isScroll }) => {
  return (
    <>
      <Preloader />
      <LineDecoration />
      <ScrollIcon isScroll={isScroll} />
      <Header />
      {children}
      <Footer title={data.title} subtitle={data.subtitle} />
    </>
  );
};

export default MainLayout;
