import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

const verticalLineAnimation = keyframes`
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
 `;

const horizontalLineAnimation = keyframes`
    0% {
    bottom: 100%;
    }
    100% {
        bottom: 0;
    }
`;

const stroke = keyframes`
    to {
      stroke-dashoffset: 0;
    }
`;

export const LineBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 998;
  pointer-events: none;
`;

export const VerticalLine = styled.span`
  display: block;
  width: 1px;
  height: 100vh;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  right: 13vw;
  bottom: 100%;
  animation: ${horizontalLineAnimation} 0.5s both;
  animation-delay: 0.5s;
`;

export const HorizontalLine = styled.span`
  display: block;
  width: 100vw;
  height: 1px;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  top: 13.33vh;
  left: 100%;
  animation: ${verticalLineAnimation} 0.5s both;
  animation-delay: 0.7s;
`;

export const Circle = styled.svg`
  width: 73.34vh;
  height: 73.34vh;

  opacity: 0.5;
  position: absolute;
  top: 13.33vh;
  right: 13vw;
  transform: translateX(50%) rotate(-90deg);
  .circle {
    stroke-dasharray: calc(73.34vh * 3.14);
    stroke-dashoffset: calc(73.34vh * 3.14);
    animation: ${stroke} 2s ease-out forwards;
  }
`;
