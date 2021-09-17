import React, { FC } from 'react';
import MoodPage from 'pagesLayout/Mood';
import Seo from '@comp/Seo';

const data = {
  title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
  metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
};

const Mood: FC = () => {
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <MoodPage />
    </>
  );
};

export default Mood;
