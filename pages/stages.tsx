import React, { FC, useEffect } from 'react';
import StagesPage from 'pagesLayout/Stages';
import Seo from '@comp/Seo';
import { useDispatch, useSelector } from 'react-redux';

const Stages: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.stages);
  useEffect(() => {
    dispatch({ type: 'LOCAL_API', payload: 'stages_page', types: 'STAGES_INIT' });
  }, []);
  return (
    <>
      <Seo title={data.seo.title} metaDescriptionContent={data.seo.metaDescriptionContent} />
      <StagesPage data={data.page} />
    </>
  );
};

export default Stages;
