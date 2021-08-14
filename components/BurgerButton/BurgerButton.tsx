import React, { FC, useState } from 'react';
import { BurgerButtonStyled, LineOne, LineTwo, LineThree, LineFour, LineFive } from './BurgerButton.styles';

interface LineProps {
  children?: string;
  isMenuOpen?: boolean;
  onClickHandler?: () => void;
}

const BurgerButton: FC<LineProps> = ({ children, isMenuOpen, onClickHandler }) => {
  return (
    <BurgerButtonStyled onClick={onClickHandler} isMenuOpen={isMenuOpen}>
      <LineFour />
      <LineFive />
      <LineOne />
      <LineTwo />
      <LineThree>{children}</LineThree>
    </BurgerButtonStyled>
  );
};

export default BurgerButton;
