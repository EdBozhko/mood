import React, { FC, useState } from 'react';
import { HeaderStyled } from './Header.styles';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeaderStyled></HeaderStyled>
    </>
  );
};

export default Header;
