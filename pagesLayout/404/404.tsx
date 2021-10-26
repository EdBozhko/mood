import React, { FC } from 'react';
import HeroBlock from '@comp/HeroBlock';
import { SVGContainer } from './404.styles';

interface Page404Props {
  data: {
    title: string;
    subtitle: string;
    backgroundImg: string;
  };
}

const Page404: FC<Page404Props> = ({ data }) => {
  const { title, subtitle, backgroundImg } = data;
  return (
    <HeroBlock title={title} subtitle={subtitle}>
      <SVGContainer backgroundImg={backgroundImg} />
    </HeroBlock>
  );
};
export default Page404;
