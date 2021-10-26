import React, { FC, useEffect, ReactNode } from 'react';
import MoodPage from 'pagesLayout/Mood';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface MoodDataProps {
  mood: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      slides: [{ link: string; src: ReactNode; alt: string; blackout: number; heading: string; title: string; subtitle: string }];
      h1: string;
      footer: {
        title: string;
        subtitle: string;
        infoBox: {
          address: string;
          addressHref: string;
          workingHours: string;
        };
      };
    };
  };
}

const Mood: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: MoodDataProps) => state.mood);
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
