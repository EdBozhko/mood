import { screen } from '@themeConfigs/media';
import theme from '@themeConfigs/theme';
import styled, { css, keyframes } from 'styled-components';

const PreloaderAnimation = keyframes`
    0% {
        width: 100vw;
    }
    100% {
        width: 0vw;
    }
`;

export const PreloaderContainer = styled.div`
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
background-color: ${theme.colors.brown};
z-index: 997;
animation: ${PreloaderAnimation} 1s both;
  animation-delay: 5s;
`