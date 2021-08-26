import React, { FC } from 'react';
import Image from 'next/image';
import { HeroContainer, H2, Title, Subtitle } from './HeroBlock.styles';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImg?: string;
  blackout?: number;
}

const HeroBlock: FC<HeroProps> = ({ title, subtitle, backgroundImg, blackout = 0, children }) => {
  return (
    <HeroContainer backgroundImg={backgroundImg} blackout={blackout}>
      <H2>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </H2>
      {children}
    </HeroContainer>
  );
};
export default HeroBlock;
