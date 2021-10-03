import React, { FC, useEffect } from 'react';
import AboutPage from 'pagesLayout/About';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const About: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.about);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'about_page', types: 'ABOUT_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.seo.title} metaDescriptionContent={data.seo.metaDescriptionContent} />
      <AboutPage data={data.page} />
    </>
  );
};

export default About;
