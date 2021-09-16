import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface CallToActionContainerProps {
  blackout?: number;
}

export const CallToActionSection = styled.section`
  width: 100%;
`;

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
  font-size: 40px;
  font-weight: 300;
  line-height: 43px;
  color: ${theme.colors.golden};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    font-size: 72rem;
    line-height: 86rem;
  }
`;
export const Subtitle = styled.span`
  cursor: pointer;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 30px;
  font-weight: 300;
  line-height: 36px;
  color: ${theme.colors.beige};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    font-size: 36rem;
    line-height: 43rem;
  }
`;
export const TitleContainer = styled.div`
  text-align: center;
  z-index: 1;
`;
