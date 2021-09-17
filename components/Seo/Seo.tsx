import Head from 'next/head';
import React from 'react';

const SEO = ({ title, metaDescriptionContent }) => {
  return (
    <Head
      children={
        <>
          <title>{title}</title>
          <meta name="description" content={metaDescriptionContent} />
        </>
      }
    />
  );
};

export default SEO;
