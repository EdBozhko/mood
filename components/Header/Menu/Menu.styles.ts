import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface MenuStyledProps {
  isMenuOpen: boolean;
}

export const MenuStyled = styled.div<MenuStyledProps>`
  visibility: hidden;
  width: 100vw;
  height: 0;
  transition: height ease 0.4s;
  position: absolute;
  z-index: -1;
  padding: 100px 16px 50px 16px;
  box-sizing: border-box;
  ::before {
    content: '';
    position: absolute;
    opacity: 0.5;
    top: 90px;
    left: 50%;
    height: 2px;
    width: 0;
    transform: translateX(-50%);
    background-color: ${theme.colors.golden};
    transition: width 0.4s ease-in-out;
    transition-delay: 0.2s;
  }
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      height: 100vh;
      visibility: visible;
      background-color: ${theme.colors.brown};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ::before {
        width: 80%;
      }
    `}
  @media ${screen.lp} {
    width: 0;
    transition: width ease 0.4s;
    ::before {
      content: '';
      position: absolute;
      opacity: 0.5;
      left: 0;
      height: 0;
      width: 2px;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${theme.colors.golden};
      transition: height 0.4s ease-in-out;
      transition-delay: 0.2s;
    }
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        position: relative;
        visibility: visible;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        margin-left: 13px;
        padding-left: 13px;
        box-sizing: border-box;
        ::before {
          height: 80%;
        }
      `}
  }
`;

export const Nav = styled.nav``;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 17px;
  overflow: hidden;
`;

export const Phone = styled.a<MenuStyledProps>`
  font-size: 0;
  transition: font-size ease 0.5s;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      display: inline-flex;
      align-items: center;
      height: 56px;
      font-size: 36px;
      font-family: ${theme.fontsFamily.bloggerSans};
      color: ${theme.colors.beige};
      :hover {
        color: ${theme.colors.orange};
      }
    `}
`;

export const Socials = styled.div<MenuStyledProps>`
  display: flex;
  justify-content: space-around;
  opacity: 0;
  transition: opacity ease 0.5s;
  transition-delay: 0.2s;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      opacity: 1;
    `}
`;

export const SVG = styled.svg``;
