import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface CardBackgroundProps {
  cardImg: string;
}

export const CardTitle = styled.h3`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 600;
  font-size: 18px;
`;
export const CardDescription = styled.p`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 300;
  font-size: 16px;
`;
export const CardInfo = styled.div`
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 5%;
  width: 100%;
  color: #fff;
  -webkit-transform: translateY(40%);
  transform: translateY(40%);
  -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 120%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.6)));
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  > * {
    position: relative;
    z-index: 1;
  }
  ${CardDescription} {
    opacity: 0;
    text-shadow: black 0 2px 3px;
    -webkit-transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;
export const CardBackground = styled.div<CardBackgroundProps>`
  opacity: 0.8;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: url(${({ cardImg }) => cardImg}) center/cover no-repeat;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
`;
export const Card = styled.div`
  position: relative;
  -webkit-box-flex: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  -webkit-transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
export const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  -webkit-transform: perspective(800px);
  transform: perspective(800px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  cursor: pointer;
  :hover {
    ${CardInfo} {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      ::after {
        -webkit-transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
        transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      ${CardDescription} {
        opacity: 1;
        -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
    }
    ${CardBackground} {
      -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0.8;
    }
    ${Card} {
      -webkit-transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px, inset white 0 0 0 6px;
    }
  }
  @media ${screen.lp} {
    margin: 10px;
  }
`;
