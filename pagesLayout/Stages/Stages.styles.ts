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

export const StagesList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const StagesItem = styled.li`
  display: flex;
  flex-direction: row;
  :nth-child(even) {
    flex-direction: row-reverse;
  }
`;
export const DescriptionContainer = styled.div<DescriptionProps>`
  padding: 60px;
  width: 40%;
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
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 60%;
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