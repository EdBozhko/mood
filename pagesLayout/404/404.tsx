import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { SVGContainer } from './404.styles';

const data = {
  title: '404',
  subtitle: 'Х’юстон, у нас проблема...',
};

const Page404: FC = () => {
  return (
    <HeroBlock title={data.title} subtitle={data.subtitle}>
      <SVGContainer />
    </HeroBlock>
  );
};
export default Page404;
