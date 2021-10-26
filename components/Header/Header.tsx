import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderStyled, Container } from './Header.styles';
import BurgerButton from '@comp/BurgerButton';
import Logo from '@comp/Logo/Logo';
import Tagline from '@comp/Tagline';
import Link from 'next/link';
import Menu from './Menu';
import { isMenuOpen } from 'store/ducks/menu';

interface MenuDataProps {
  menu: {
    isMenuOpen: boolean;
  };
}

const Header: FC = () => {
  const dispatch = useDispatch();
  const isMenuOpened = useSelector((state: MenuDataProps) => state.menu.isMenuOpen);
  const menuOpenHandler = () => {
    dispatch(isMenuOpen({ isMenuOpen: !isMenuOpened }));
  };
  const onLogoClickHandler = () => {
    dispatch(isMenuOpen({ isMenuOpen: false }));
  };
  return (
    <>
      <HeaderStyled>
        <Container>
          <BurgerButton onClickHandler={menuOpenHandler} isMenuOpen={isMenuOpened}>
            MENU
          </BurgerButton>
          <Link href="/mood" prefetch={false} passHref>
            <a>
              <Logo onClickHandler={onLogoClickHandler} />
            </a>
          </Link>
          <Tagline firstLine="we will design" secondLine="your mood" />
        </Container>
        <Menu isMenuOpen={isMenuOpened} onClickHandler={menuOpenHandler} />
      </HeaderStyled>
    </>
  );
};

export default Header;
