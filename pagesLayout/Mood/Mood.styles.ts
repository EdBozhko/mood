import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface SliderItemProps {
  blackout?: number;
}

export const SliderBox = styled.section`
  height: 100%;
  width: 100%;
  .fullpage-wrapper {
    width: 100%;
  }
  @media ${screen.lp} {
    padding-left: 100px;
    box-sizing: border-box;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  @media ${screen.lp} {
    flex-direction: unset;
    position: relative;
    padding: unset;
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
export const Heading = styled.span`
  position: absolute;
  top: 20%;
  text-align: center;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 42px;
  font-weight: 300;
  line-height: 46px;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    cursor: pointer;
    font-size: 100rem;
    line-height: 120rem;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 40px;
  font-weight: 300;
  line-height: 43px;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    cursor: pointer;
    font-size: 72rem;
    line-height: 86rem;
  }
`;
export const Subtitle = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 30px;
  font-weight: 300;
  line-height: 36px;
  color: ${theme.colors.beige};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    cursor: pointer;
    font-size: 36rem;
    line-height: 43rem;
  }
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
