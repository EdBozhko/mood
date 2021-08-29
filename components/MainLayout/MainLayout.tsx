import React, { FC, useEffect, useState } from 'react';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';
import Preloader from '@comp/Preloader';

const data = {
  title: 'Готові розпочати проект?',
  subtitle: 'Замовте безкоштовну консультацію',
};

const MainLayout: FC = ({ children }) => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    setPage(window.location.pathname);
  });
  return (
    <>
      <Preloader />
      <LineDecoration />
      <Header />
      {children}
      <Footer page={page === '/mood'} title={data.title} subtitle={data.subtitle} />
    </>
  );
};

export default MainLayout;
