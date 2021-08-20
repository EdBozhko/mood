import styled, { createGlobalStyle, css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface SliderItemProps {
  blackout?: number
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
`;
export const SliderItem = styled.a<SliderItemProps>`
display: block;
position: relative;
width: 100%;
    height: 100vh;
::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  ${({blackout})=>blackout && css`
  background-color: black;
  opacity: ${blackout};
  
  `}
}
`;
export const MoodGlobalStyle = createGlobalStyle`
html{
    overflow: hidden;
}
`;
export const HeadingContainer = styled.div`
position: absolute;
`
export const H1 = styled.h1`  position: absolute;
width: 1px;
height: 1px;
margin: -1px;
border: 0px;
padding: 0px;
clip: rect(0 0 0 0);
overflow: hidden;`
export const Heading = styled.span``
export const Title = styled.h2``
export const Subitle = styled.span``
export const InnerVisible = styled.span``
export const InnerSEO = styled.span``