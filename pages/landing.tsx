import React, { FC } from 'react';
import LandingPage from 'pagesLayout/Landing';
import Seo from '@comp/Seo';

const data = {
  title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
  metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
};

const Landing: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <LandingPage />
    </>
  );
};

export default Landing;
