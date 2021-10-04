import React, { FC, useEffect } from 'react';
import LandingPage from 'pagesLayout/Landing';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const Landing: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.landing);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'landing_page', types: 'LANDING_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.seo.title} metaDescriptionContent={data.seo.metaDescriptionContent} />
      <LandingPage data={data.page} />
    </>
  );
};

export default Landing;
