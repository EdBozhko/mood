import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface CallToActionContainerProps {
  blackout?: number;
}

export const CallToActionContainer = styled.a<CallToActionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 700px;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    ${({ blackout }) =>
      blackout &&
      css`
        background-color: black;
        opacity: ${blackout};
      `}
  }
`;

export const Title = styled.h2`
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 72rem;
  font-weight: 300;
  line-height: 86rem;
  color: ${theme.colors.golden};
  text-shadow: 4.83rem 1.294rem 11.7rem rgba(0, 0, 0, 0.7);
`;
export const Subtitle = styled.span`
  cursor: pointer;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 36rem;
  font-weight: 300;
  line-height: 43rem;
  color: ${theme.colors.beige};
  text-shadow: 4.83rem 1.294rem 11.7rem rgba(0, 0, 0, 0.7);
`;
export const TitleContainer = styled.div`
  text-align: center;
  z-index: 1;
`;
