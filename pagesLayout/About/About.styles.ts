import styled, { css, keyframes } from 'styled-components';
import { variant } from 'styled-system';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const TextBlockContainer = styled.section`
  width: 100%;
  /* min-height: 700px; */
  /* padding: 20px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${theme.colors.brown};

  @media ${screen.lp} {
    width: 100%;
    /* min-height: 700px; */
    padding: 150px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    background-color: ${theme.colors.brown};
  }
`;

export const TextBlock = styled.p`
  padding: 20px;
  box-sizing: border-box;

  color: ${theme.colors.beige};

  display: block;
  width: 100%;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 24px;
  font-weight: 300;
  line-height: 130%;
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    padding: unset;
    box-sizing: unset;
    display: block;
    width: 70%;
    text-transform: uppercase;
    font-family: ${theme.fontsFamily.bloggerSans};
    font-size: 30px;
    font-weight: 300;
    line-height: 140%;
    text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  }
`;

export const H1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0px;
  padding: 0px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
