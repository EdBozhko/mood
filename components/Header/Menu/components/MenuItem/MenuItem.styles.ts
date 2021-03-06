import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';

interface ItemProps {
  transitionDelay: string;
  isMenuOpen: boolean;
}

export const ListItem = styled.li`
  position: relative;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Item = styled.a<ItemProps>`
  position: relative;
  left: -80%;
  opacity: 0;
  transition: opacity ease 0.5s, left ease 0.5s;
  ${({ transitionDelay }) =>
    css`
      transition-delay: ${transitionDelay};
    `}
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      left: 0;
      opacity: 1;
      text-decoration: none;
      color: ${theme.colors.orange};
      font-family: ${theme.fontsFamily.bloggerSans};
      font-size: 30px;
      font-weight: 300;
      text-transform: uppercase;
      :hover {
        color: ${theme.colors.beige};
      }
    `}
`;
