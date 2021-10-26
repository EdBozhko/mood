import React, { FC, useEffect } from 'react';
import AboutPage from 'pagesLayout/About';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

interface AboutDataProps {
  about: {
    seo: {
      title: string;
      metaDescriptionContent: string;
    };
    page: {
      h1: string;
      title: string;
      subtitle: string;
      backgroundImg: string;
      blackout: number;
      callToAction: {
        href: string;
        blackout: number;
        title: string;
        subtitle: string;
        src: string;
        alt: string;
      };
      textBlocks: {
        block_1: {
          text_1: string;
        };
      };
      photoBlock: string;
      team: [
        {
          name: string;
          photoSrc: string;
          telephone: string;
          position: string;
        },
      ];
    };
  };
}

const About: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AboutDataProps) => state.about);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'about_page', types: 'ABOUT_INIT' });
  }, []);
  const { seo, page } = data;
  return (
    <>
      <Seo title={seo.title} metaDescriptionContent={seo.metaDescriptionContent} />
      <AboutPage data={page} />
    </>
  );
};

export default About;
