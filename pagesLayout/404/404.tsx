import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { SVGContainer } from './404.styles';

const Page404: FC = ({ data }) => {
  const { title, subtitle, backgroundImg } = data;
  return (
    <HeroBlock title={title} subtitle={subtitle}>
      <SVGContainer backgroundImg={backgroundImg} />
    </HeroBlock>
  );
};
export default Page404;
