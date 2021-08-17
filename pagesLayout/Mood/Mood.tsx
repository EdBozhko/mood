import React, { FC } from 'react';
import Carousel from 'react-elastic-carousel';
import { SliderItem } from './Mood.styled';

const data = [{}];

const MoodPage: FC = () => {
  return <Carousel className="slider" itemsToShow={1} verticalMode={true} itemsToScroll={1} isRTL={false}></Carousel>;
};

export default MoodPage;
