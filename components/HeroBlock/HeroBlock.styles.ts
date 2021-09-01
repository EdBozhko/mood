import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface HeroContainerProps {
  backgroundImg?: string;
  blackout?: number;
  vh?: string;
}

export const HeroContainer = styled.div<HeroContainerProps>`
  height: ${({ vh }) => vh};
  margin-top: 80px;
  width: 100%;
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
  @media ${screen.lp} {
    margin-top: unset;
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
  }
`;
export const H2 = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  pointer-events: none;
  text-align: center;
  @media ${screen.lp} {
    text-align: unset;
    width: unset;
    display: flex;
    flex-direction: column;
    padding-left: 100px;
    box-sizing: border-box;
    z-index: 1;
    pointer-events: none;
  }
`;
export const Title = styled.span`
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 46px;
  font-weight: 300;
  line-height: 50px;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    font-size: 100px;
    line-height: 120px;
  }
`;
export const Subtitle = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 36px;
  font-weight: 300;
  line-height: 40px;
  color: ${theme.colors.beige};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    font-size: 40px;
    line-height: 48px;
  }
`;
