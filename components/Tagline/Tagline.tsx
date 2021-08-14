import React, { FC } from 'react';
import { TaglineStyled, TaglineSpan } from './Tagline.styles';

interface TaglineProps {
  firstLine?: string;
  secondLine?: string;
}

const Tagline: FC<TaglineProps> = ({ firstLine, secondLine }) => {
  return (
    <>
      <TaglineStyled>
        <TaglineSpan>{firstLine}</TaglineSpan>
        <TaglineSpan>{secondLine}</TaglineSpan>
      </TaglineStyled>
    </>
  );
};

export default Tagline;
