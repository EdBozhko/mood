import React, { FC, useEffect } from 'react';
import PortfolioPage from 'pagesLayout/Portfolio';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const Portfolio: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.portfolio);
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
