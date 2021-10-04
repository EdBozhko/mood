import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { SVGContainer } from './404.styles';

const Page404: FC = ({ data }) => {
  return (
    <HeroBlock title={data.title} subtitle={data.subtitle}>
      <SVGContainer backgroundImg={data.backgroundImg} />
    </HeroBlock>
  );
};
export default Page404;
