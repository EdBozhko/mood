import React, { FC, useState } from 'react';
import { BurgerButtonStyled, LineOne, LineTwo, LineThree, LineFour, LineFive } from './BurgerButton.styles';

interface LineProps {
  children?: string;
}

const BurgerButton: FC<LineProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <BurgerButtonStyled onClick={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen}>
      <LineFour />
      <LineFive />
      <LineOne />
      <LineTwo />
      <LineThree>{children}</LineThree>
    </BurgerButtonStyled>
  );
};

export default BurgerButton;
