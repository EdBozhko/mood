import React, { FC, useEffect, ReactNode } from 'react';
import PortfolioPage from 'pagesLayout/Portfolio';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface PortfolioDataProps {
  portfolio: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      h1: string;
      title: string;
      subtitle: string;
      galleries: [
        {
          title: string;
          description: string;
          gallery: [
            {
              src: string;
              alt: string;
              width: number;
              height: number;
            },
          ];
        },
      ];
      column_1_img: string;
      column_2_img: string;
      column_3_img: string;
      column_4_img: string;
    };
  };
}

const Portfolio: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: PortfolioDataProps) => state.portfolio);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'portfolio_page', types: 'PORTFOLIO_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <PortfolioPage data={page} />
    </>
  );
};

export default Portfolio;
