import React, { FC } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main>{children}</main> */}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
