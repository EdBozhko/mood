import React, { FC } from 'react';
import { LineBox, VerticalLine, HorizontalLine, Circle } from './LineDecoration.styles';

const LineDecoration: FC = () => {
  return (
    <LineBox>
      <VerticalLine />
      <HorizontalLine />
      <Circle>
        <circle className="circle" cx="50%" cy="50%" r="49.8%" stroke="#fff" stroke-width="1" fill-opacity="0" />
      </Circle>
    </LineBox>
  );
};
export default LineDecoration;
