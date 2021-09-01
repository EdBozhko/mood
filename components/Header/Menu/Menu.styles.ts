import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface MenuStyledProps {
  isMenuOpen: boolean;
  vh?: string;
}

export const MenuStyled = styled.div<MenuStyledProps>`
  height: 0;
  visibility: hidden;
  transition: height ease 0.4s;
  ::before {
    content: '';
    position: absolute;
    opacity: 0.5;
    top: 0;
    width: 0;
    height: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.golden};
    transition: width 0.4s ease-in-out;
    transition-delay: 0.2s;
  }
  ${({ isMenuOpen, vh }) =>
    isMenuOpen &&
    vh &&
    css`
      visibility: visible;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: ${vh};
      margin-top: 13px;
      padding-top: 13px;
      padding-bottom: 13px;

      box-sizing: border-box;
      ::before {
        width: 80%;
      }
    `}
  @media ${screen.lp} {
    width: 0;
    visibility: hidden;
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
        visibility: visible;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        height: 100%;
        margin-top: unset;
        padding-top: unset;
        margin-left: 13px;
        padding-left: 13px;
        padding-bottom: unset;

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
      justify-content: center;
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
