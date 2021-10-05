import React, { FC, useEffect } from 'react';
import MoodPage from 'pagesLayout/Mood';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const Mood: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mood);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'mood_page', types: 'MOOD_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <MoodPage data={page} />
    </>
  );
};

export default Mood;
