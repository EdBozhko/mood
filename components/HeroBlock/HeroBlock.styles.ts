import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface HeroContainerProps {
  backgroundImg?: string;
  blackout?: number;
}

export const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  ${({ backgroundImg, blackout }) =>
    backgroundImg &&
    blackout &&
    css`
      background: linear-gradient(rgba(0, 0, 0, ${blackout}), rgba(0, 0, 0, ${blackout})), url(${backgroundImg});
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
    `}
`;
export const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 100rem;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
`;
export const Title = styled.span`
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 100rem;
  font-weight: 300;
  line-height: 120rem;
  color: ${theme.colors.orange};
  text-shadow: 4.83rem 1.294rem 11.7rem rgba(0, 0, 0, 0.7);
`;
export const Subtitle = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 40rem;
  font-weight: 300;
  line-height: 48rem;
  color: ${theme.colors.beige};
  text-shadow: 4.83rem 1.294rem 11.7rem rgba(0, 0, 0, 0.7);
`;
