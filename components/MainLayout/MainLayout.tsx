import React, { FC } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <LineDecoration />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
