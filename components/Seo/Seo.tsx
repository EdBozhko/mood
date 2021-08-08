import Head from 'next/head';
import React from 'react';

const SEO = (props) => {
  const { title, metaDescriptionContent } = props;
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
