import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Item = styled.a`
  font-size: 0;
  transition: font-size ease 0.5s;
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      text-decoration: none;
      color: ${theme.colors.golden};
      font-family: ${theme.fontsFamily.bloggerSans};
      font-size: 30px;
      font-weight: 300;
      text-transform: uppercase;
    `}
`;
