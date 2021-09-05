import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface DescriptionProps {
  textColor: string;
  backgroundColor: string;
}

interface SeparatorProps {
  textColor: string;
}
export const StagesSection = styled.section``;
export const StagesList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StagesItem = styled.li`
  display: flex;
  flex-direction: column;
  @media ${screen.lp} {
    display: flex;
    flex-direction: row;
    :nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;
export const DescriptionContainer = styled.div<DescriptionProps>`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontsFamily.bloggerSans};
  ${({ textColor, backgroundColor }) =>
    textColor &&
    backgroundColor &&
    css`
      color: ${textColor};
      background-color: ${backgroundColor};
    `}
  > * {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media ${screen.lp} {
    padding: 60px;
    width: 40%;
    box-sizing: unset;
    display: flex;
    flex-direction: column;
    font-family: ${theme.fontsFamily.bloggerSans};
    ${({ textColor, backgroundColor }) =>
      textColor &&
      backgroundColor &&
      css`
        color: ${textColor};
        background-color: ${backgroundColor};
      `}
    > * {
      :not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  @media ${screen.lp} {
    position: relative;
    width: 60%;
    height: unset;
  }
`;
export const NumberBox = styled.span`
  text-transform: uppercase;
  font-size: 100px;
  font-weight: 800;
  line-height: 80px;
`;
export const TitleBox = styled.span`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 800;
  line-height: 36px;
`;
export const DescriptionBox = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;
export const Separator = styled.span<SeparatorProps>`
  width: 60px;
  height: 2px;
  ${({ textColor }) =>
    textColor &&
    css`
      background-color: ${textColor};
    `}
`;
