import React, { FC, useEffect } from 'react';
import Page404 from 'pagesLayout/404';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const ErrorPage: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.error);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'error_page', types: 'ERROR_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <Page404 data={page} />
    </>
  );
};

export default ErrorPage;
