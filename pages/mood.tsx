import React, { FC, useEffect } from 'react';
import MoodPage from 'pagesLayout/Mood';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';
import { moodInit } from 'store/ducks/mood';

// const data = {
//   title: 'MOOD | Професійна студія дизайну. Дизайн інтер’єру, архітектурне проектування, ландшафтний дизайн, технічний дизайн',
//   metaDescriptionContent: 'MOOD - професійна студія дизайну та архітектурного проектування, яка втілить Ваші найсміливіші фантазії',
// };

const Mood: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mood);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'mood_page', types: 'MOOD_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.title} metaDescriptionContent={data.metaDescriptionContent} />
      <MoodPage data={data} />
    </>
  );
};

export default Mood;
