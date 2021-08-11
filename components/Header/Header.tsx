import React, { FC, useState } from 'react';
import { HeaderStyled } from './Header.styles';
import BurgerButton from '@comp/BurgerButton';
import Logo from '@comp/Logo/Logo';
import Tagline from '@comp/Tagline';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderStyled>
        <BurgerButton>MENU</BurgerButton>
        <Logo />
        <Tagline firstLine="we will design" secondLine="your mood" />
      </HeaderStyled>
    </>
  );
};

export default Header;
