import React, { FC } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';
import Preloader from '@comp/Preloader';

const MainLayout: FC = ({ children }) => {
  return (
    <>
              <Preloader/>
      <LineDecoration />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
