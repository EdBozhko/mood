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
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <AboutPage data={page} />
    </>
  );
};

export default About;
