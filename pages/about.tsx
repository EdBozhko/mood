import React, { FC } from 'react';
import AboutPage from 'pagesLayout/About';
import Seo from '@comp/Seo';

const data = {
  title: 'Про нас | mood-design.com.ua',
  metaDescriptionContent: 'MOOD - наш досвід та пристрасть створить Ваш настрій та комфорт!',
};

const About: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <AboutPage />
    </>
  );
};

export default About;
