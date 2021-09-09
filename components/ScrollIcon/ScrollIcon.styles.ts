import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface IconContainerProps {
  isScroll?: boolean;
}

const Mouse = keyframes`


0% {
          transform: translateY(0) ;
        }
        40% {
          transform: translateY(-50%);
        }
        100% {
          transform: translateY(0);
        }

`;
const Scroll = keyframes`
        0% {
          opacity: 1;
          transform: translateX(-50%);

        }
        100% {
          opacity: 0;
          transform: translateY(46px)  translateX(-50%);
        }

`;

export const IconScroll = styled.div`
  display: none;
  @media ${screen.lp} {
    position: absolute;
    right: 50%;
    width: 40px;
    height: 70px;
    bottom: 3%;
    box-shadow: inset 0 0 0 1px #fff;
    border-radius: 25px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: ${Mouse};
    ::before {
      position: absolute;
      left: 50%;
      content: '';
      width: 8px;
      height: 8px;
      background: #fff;
      top: 8px;
      border-radius: 4px;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: ${Scroll};
    }
  }
`;
export const IconText = styled.span`
  position: relative;
  transform: translateY(100%);
  color: white;
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 15px;
`;
export const IconContainer = styled.div<IconContainerProps>`
  width: 40px;
  height: 70px;
  position: absolute;
  z-index: 2000;
  right: 45%;
  top: 90vh;
  display: ${({ isScroll }) => (isScroll ? 'none' : 'flex')};
`;
