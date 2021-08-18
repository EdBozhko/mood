import styled, { createGlobalStyle } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const SliderBox = styled.section`
  height: 100%;
  width: 100%;
  .rec-slider-container {
    margin: 0;
  }
  .rec-carousel-item {
    width: 100%;
    height: 100vh;
  }
`;
export const SliderItem = styled.a``;
export const MoodGlobalStyle = createGlobalStyle`
html{
    overflow: hidden;
}
`;
