import React, { FC } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';
import Preloader from '@comp/Preloader';

const data = {
  title: 'Готові розпочати проект?',
  subtitle: 'Замовте безкоштовну консультацію',
};

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Preloader />
      <LineDecoration />
      <Header />
      {children}
      <Footer title={data.title} subtitle={data.subtitle} />
    </>
  );
};

export default MainLayout;
