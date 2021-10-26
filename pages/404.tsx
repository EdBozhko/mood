import React, { FC, useEffect } from 'react';
import Page404 from 'pagesLayout/404';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface ErrorDataProps {
  error: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      title: string;
      subtitle: string;
      backgroundImg: string;
    };
  };
}

const ErrorPage: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: ErrorDataProps) => state.error);
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
