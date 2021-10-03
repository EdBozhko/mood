import React, { FC, useEffect } from 'react';
import MoodPage from 'pagesLayout/Mood';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';
import { moodInit } from 'store/ducks/mood';

const Mood: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mood);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'mood_page', types: 'MOOD_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.seo.title} metaDescriptionContent={data.seo.metaDescriptionContent} />
      <MoodPage data={data.page} />
    </>
  );
};

export default Mood;
