import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { SVGContainer } from './404.styles';

const Page404: FC = () => {
  return (
    <HeroBlock title="404" subtitle="Х’юстон, у нас проблема...">
      <SVGContainer />
    </HeroBlock>
  );
};
export default Page404;
