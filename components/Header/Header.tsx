import React, { FC, useState } from 'react';
import { HeaderStyled, Container } from './Header.styles';
import BurgerButton from '@comp/BurgerButton';
import Logo from '@comp/Logo/Logo';
import Tagline from '@comp/Tagline';
import Link from 'next/link';
import Menu from './Menu';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderStyled>
        <Container>
          <BurgerButton onClickHandler={() => setIsMenuOpen((prev) => !prev)} isMenuOpen={isMenuOpen}>
            MENU
          </BurgerButton>
          <Link href="mood" prefetch={false} passHref>
            <a>
              <Logo />
            </a>
          </Link>
          <Tagline firstLine="we will design" secondLine="your mood" />
        </Container>
        <Menu isMenuOpen={isMenuOpen} />
      </HeaderStyled>
    </>
  );
};

export default Header;
