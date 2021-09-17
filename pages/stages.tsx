import React, { FC } from 'react';
import StagesPage from 'pagesLayout/Stages';
import Seo from '@comp/Seo';

const data = {
  title: 'Етапи роботи | mood-design.com.ua',
  metaDescriptionContent: 'Ми чітко плануємо та продумовуємо кожен рух задля забеспечення найкращого результату.',
};

const Stages: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <StagesPage />
    </>
  );
};

export default Stages;
