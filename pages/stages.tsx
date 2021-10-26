import React, { FC, useEffect } from 'react';
import StagesPage from 'pagesLayout/Stages';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface StagesDataProps {
  stages: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      h1: string;
      title: string;
      subtitle: string;
      blackout: number;
      backgroundImg: string;
      stages: [
        {
          src: string;
          alt: string;
          number: string;
          title: string;
          description: string;
          textColor: string;
          backgroundColor: string;
        },
      ];
      callToAction: {
        href: string;
        blackout: number;
        title: string;
        subtitle: string;
        src: string;
        alt: string;
      };
    };
  };
}

const Stages: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: StagesDataProps) => state.stages);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'stages_page', types: 'STAGES_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <StagesPage data={page} />
    </>
  );
};

export default Stages;
