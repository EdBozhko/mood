import React, { FC } from 'react';
import { IconScroll, IconText, IconContainer } from './ScrollIcon.styles';

interface ScrollIconProps {
  isScroll?: boolean;
}

const ScrollIcon: FC<ScrollIconProps> = ({ isScroll }) => {
  return (
    <IconContainer isScroll={isScroll}>
      <IconScroll>
        <IconText>scroll</IconText>
      </IconScroll>
    </IconContainer>
  );
};
export default ScrollIcon;
