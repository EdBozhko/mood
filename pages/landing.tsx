import React, { FC, useEffect } from 'react';
import LandingPage from 'pagesLayout/Landing';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface LandingDataProps {
  landing: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      h1: string;
      title: string;
      subtitle: string;
      telephoneBlock: {
        title: string;
        telephoneHref: string;
        telephone: string;
      };
      stepsList: [
        {
          imgUrl: string;
          description: string;
        },
      ];
      column_1_img: string;
      column_2_img: string;
      column_3_img: string;
      column_4_img: string;
    };
  };
}

const Landing: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: LandingDataProps) => state.landing);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'landing_page', types: 'LANDING_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <LandingPage data={page} />
    </>
  );
};

export default Landing;
