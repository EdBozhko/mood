import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '@comp/Header';
import Footer from '@comp/Footer';
import LineDecoration from '@comp/LineDecoration';
import Preloader from '@comp/Preloader';
import ScrollIcon from '@comp/ScrollIcon';

interface MainLayoutProps {
  isScroll?: boolean;
}

const MainLayout: FC<MainLayoutProps> = ({ children, isScroll }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.footer);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'footer', types: 'FOOTER_INIT' });
  }, []);
  const { title, subtitle, infoBox } = data;

  return (
    <>
      <Preloader />
      <LineDecoration />
      <ScrollIcon isScroll={isScroll} />
      <Header />
      {children}
      <Footer title={title} subtitle={subtitle} infoBox={infoBox} />
    </>
  );
};

export default MainLayout;
