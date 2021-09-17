import React, { FC } from 'react';
import PortfolioPage from 'pagesLayout/Portfolio';
import Seo from '@comp/Seo';

const data = {
  title: 'Портфоліо | mood-design.com.ua',
  metaDescriptionContent: 'Знайдіть своє натхнення у наших роботах.',
};

const Portfolio: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <PortfolioPage />
    </>
  );
};

export default Portfolio;
