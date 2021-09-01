import styled, { css, keyframes } from 'styled-components';
import { variant } from 'styled-system';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface TextBlockContainerProps {
  blackout?: number;
  backgroundImg?: string;
}

interface TextBlockProps {
  blockAlign?: string;
  textColor?: string;
}

export const TextBlockContainer = styled.div<TextBlockContainerProps>`
  width: 100%;
  /* min-height: 700px; */
  /* padding: 20px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${({ backgroundImg, blackout }) =>
    backgroundImg &&
    blackout &&
    css`
      background: linear-gradient(rgba(0, 0, 0, ${blackout}), rgba(0, 0, 0, ${blackout})), url(${backgroundImg});
      background-size: cover;
      background-position: center center;
      /* background-attachment: fixed; */
    `}
  @media ${screen.lp} {
    width: 100%;
    min-height: 700px;
    padding: 150px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    ${({ backgroundImg, blackout }) =>
      backgroundImg &&
      blackout &&
      css`
        background: linear-gradient(rgba(0, 0, 0, ${blackout}), rgba(0, 0, 0, ${blackout})), url(${backgroundImg});
        background-size: cover;
        background-position: center center;
        /* background-attachment: fixed; */
      `}
  }
`;

export const TextBlock = styled.p<TextBlockProps>`
  padding: 20px;
  box-sizing: border-box;
  ${({ textColor }) =>
    textColor &&
    css`
      color: ${textColor};
    `}
  display: block;
  width: 100%;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    ${variant({
      prop: 'blockAlign',
      variants: {
        right: {
          marginLeft: 'auto',
        },
        left: {
          marginRight: 'auto',
        },
      },
    })}
    ${({ textColor }) =>
      textColor &&
      css`
        color: ${textColor};
      `}
      padding: unset;
    box-sizing: unset;
    display: block;
    width: 55%;
    text-transform: uppercase;
    font-family: ${theme.fontsFamily.bloggerSans};
    font-size: 30px;
    font-weight: 300;
    line-height: 36px;
    text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  }
`;
