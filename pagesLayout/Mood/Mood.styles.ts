import styled, { createGlobalStyle, css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface SliderItemProps {
  blackout?: number;
}

export const SliderBox = styled.section`
  height: 100%;
  width: 100%;
  .rec-slider-container {
    margin: 0;
  }
  .rec-carousel-item {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .slider {
    position: relative;
  }
`;
export const SliderItem = styled.a<SliderItemProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
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

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
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
export const Heading = styled.span`
  cursor: pointer;
  position: absolute;
  top: 20%;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 100px;
  font-weight: 300;
  line-height: 120px;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
`;
export const Title = styled.h2`
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 72px;
  font-weight: 300;
  line-height: 86px;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
`;
export const Subtitle = styled.span`
  cursor: pointer;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 36px;
  font-weight: 300;
  line-height: 43px;
  color: ${theme.colors.beige};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
`;
export const TitleContainer = styled.div`
  text-align: center;
  /* effect-shine */
  :hover {
    -webkit-mask-image: linear-gradient(-75deg, rgba(0, 0, 0, 0.6) 30%, #fff 50%, rgba(0, 0, 0, 0.6) 70%);
    -webkit-mask-size: 200%;
    animation: shine 1.2s infinite;
  }

  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }

    to {
      -webkit-mask-position: -50%;
    }
  }
`;
