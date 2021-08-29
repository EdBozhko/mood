import React, { FC } from 'react';
import { IconScroll, IconText } from './ScrollIcon.styles';

interface ScrollIconProps {
  isScroll?: boolean;
}

const ScrollIcon: FC<ScrollIconProps> = ({ isScroll }) => {
  return (
    <IconScroll isScroll={isScroll}>
      <IconText>scroll</IconText>
    </IconScroll>
  );
};
export default ScrollIcon;
