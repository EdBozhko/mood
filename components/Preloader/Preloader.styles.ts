import { screen } from '@themeConfigs/media';
import theme from '@themeConfigs/theme';
import styled, { css, keyframes } from 'styled-components';

interface PreloaderContainerProps {
  animationEnd?: boolean;
}

const PreloaderAnimationMobile = keyframes`
    0% {
        height: 100vh;
    }
    100% {
        height: 0vw;
    }
`;

const PreloaderAnimationDesktop = keyframes`
    0% {
        width: 100vw;
    }
    100% {
        width: 0vw;
    }
`;
const LogoAnimation = keyframes`
    0% {
        width: 100%;
    }
    100% {
        width: 0;
    }
`;

export const PreloaderContainer = styled.div<PreloaderContainerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: ${theme.colors.brown};
  z-index: 997;
  display: flex;
  padding-top: 80px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  animation: ${PreloaderAnimationMobile} 1s both;
  animation-delay: 4s;
  ${({ animationEnd }) =>
    animationEnd &&
    css`
      display: none;
    `}

  @media ${screen.lp} {
    left: 0;
    padding-left: 100px;
    animation: ${PreloaderAnimationDesktop} 1s both;
    animation-delay: 4s;
  }
`;
export const LogoContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  animation: ${LogoAnimation} 1s both;
  animation-delay: 4s;
  @media ${screen.lp} {
    padding: 0 100px;
    animation: unset;
  }
  svg {
    #eMGum8C5pt33_to {
      animation: eMGum8C5pt33_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt33_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(255.54px, -5.43px);
      }
    }
    #eMGum8C5pt34_to {
      animation: eMGum8C5pt34_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt34_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(83.241326px, -5.43px);
      }
    }
    #eMGum8C5pt35_to {
      animation: eMGum8C5pt35_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt35_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-258.06px, -5.42964px);
      }
    }
    #eMGum8C5pt36_to {
      animation: eMGum8C5pt36_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt36_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-84.42px, -5.43px);
      }
    }
    #eMGum8C5pt38_to {
      animation: eMGum8C5pt38_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt38_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(255.63px, -5.43px);
      }
    }
    #eMGum8C5pt39_to {
      animation: eMGum8C5pt39_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt39_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(154.721924px, -5.43px);
      }
    }
    #eMGum8C5pt310_to {
      animation: eMGum8C5pt310_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt310_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-258.220325px, -5.43px);
      }
    }
    #eMGum8C5pt311_to {
      animation: eMGum8C5pt311_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt311_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-155.494385px, -5.43px);
      }
    }
    #eMGum8C5pt312_to {
      animation: eMGum8C5pt312_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt312_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-52.799988px, -5.43px);
      }
    }
    #eMGum8C5pt313_to {
      animation: eMGum8C5pt313_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt313_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(52.061401px, -5.43px);
      }
    }
    #eMGum8C5pt315_to {
      animation: eMGum8C5pt315_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt315_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(255.68027px, -5.43px);
      }
    }
    #eMGum8C5pt316_to {
      animation: eMGum8C5pt316_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt316_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(156.76px, -5.43px);
      }
    }
    #eMGum8C5pt317_to {
      animation: eMGum8C5pt317_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt317_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-255.668958px, -5.43px);
      }
    }
    #eMGum8C5pt318_to {
      animation: eMGum8C5pt318_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt318_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-160.599182px, -5.43px);
      }
    }
    #eMGum8C5pt319_to {
      animation: eMGum8C5pt319_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt319_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(-60.569214px, -5.43px);
      }
    }
    #eMGum8C5pt320_to {
      animation: eMGum8C5pt320_to__to 2000ms linear 1 normal forwards;
      animation-delay: 1s;
    }
    @keyframes eMGum8C5pt320_to__to {
      0% {
        transform: translate(-1.27px, -5.43px);
      }
      25% {
        transform: translate(-1.27px, -5.43px);
      }
      100% {
        transform: translate(52.33px, -5.43px);
      }
    }
  }
`;
