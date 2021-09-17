import React, { FC } from 'react';
import Page404 from 'pagesLayout/404';
import Seo from '@comp/Seo';

const data = {
  title: '404 | mood-design.com.ua',
  metaDescriptionContent: 'Х’юстон, у нас проблема...',
};

const ErrorPage: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <Page404 />
    </>
  );
};

export default ErrorPage;
