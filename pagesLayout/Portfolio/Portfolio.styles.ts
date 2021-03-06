import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface SliderWrapperProps {
  isSliderOpen?: boolean;
}

interface ColumnProps {
  columnImg?: string;
}

const flexSlide = css`
  height: 100%;
  -webkit-flex: 1;
  /* Safari 6.1+ */
  -ms-flex: 1;
  /* IE 10 */
  flex: 1;
  -webkit-transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
  overflow: auto;
  overflow-x: hidden;
  :hover {
    -webkit-flex-grow: 3;
    flex-grow: 3;
  }
`;

const aboutFlexSlide = keyframes`
    0% {
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }
    50% {
        -webkit-flex-grow: 3;
        flex-grow: 3;
    }
    100% {
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }

`;

export const FlexContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  /* Safari */
  display: flex;
  overflow: hidden;
  @media ${screen.lp} {
    flex-direction: row;
    height: 100vh;
  }
`;

export const ColumnOne = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${({ columnImg }) => columnImg})  center/cover no-repeat;
  animation: ${aboutFlexSlide} 3s 1;
  animation-delay: 0s;
`;

export const ColumnTwo = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${({ columnImg }) => columnImg})  center/cover no-repeat;
`;

export const ColumnThree = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${({ columnImg }) => columnImg})  center/cover no-repeat;
`;

export const ColumnFour = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${({ columnImg }) => columnImg})  center/cover no-repeat;
`;

export const Galleries = styled.section`
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  background: ${theme.colors.brown};
  @media ${screen.lp} {
    padding: 40px 60px 120px;
  }
`;

export const GalleriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screen.lp} {
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: unset;
    align-items: unset;
  }
`;

export const GalleriesItem = styled.li`
  width: 100%;
  height: 700rem;
  margin-top: 20px;
  user-select: none;
  :last-child {
    margin-bottom: 20px;
  }
  @media ${screen.lp} {
    width: 380rem;
    height: 250rem;
    margin-top: 50px;
    margin-right: 10px;
    :last-child {
      margin-bottom: unset;
    }
  }
`;

export const SliderWrapper = styled.div<SliderWrapperProps>`
  width: 100vw;
  height: 100vh;
  padding: 140px 16px 50px;
  box-sizing: border-box;
  background-color: ${theme.colors.brown};
  position: fixed;
  z-index: 10;
  top: -1000%;
  transition: top 0.5s ease;
  ${({ isSliderOpen }) =>
    isSliderOpen &&
    css`
      top: 0;
    `};
  display: flex;
  align-items: center;
  @media ${screen.lp} {
    width: calc(100% - 100px);
    padding: 100px;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  .slick-slider {
    top: 50%;
    transform: translateY(-50%);
  }

  .slick-cloned {
    display: none;
  }
  .slick-slide {
    width: 100vw;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    li.slick-active button:before {
      color: ${theme.colors.orange};
    }
    button::before {
      color: ${theme.colors.orange};
    }
  }
  @media ${screen.lp} {
    height: 80%;
    .slick-slider {
      top: unset;
      transform: unset;
    }
    .slick-track {
      display: block;
    }
    .slick-list {
      overflow: visible;
    }
    .slick-arrow {
      display: block !important;
      top: unset;
      bottom: -7%;
    }
    .slick-prev:before,
    .slick-next:before {
      color: ${theme.colors.orange};
      opacity: 1;
      font-size: 40px;
    }
    .slick-slide {
      width: unset;
      img {
        filter: grayscale(100%);
      }
    }
    .slick-current {
      img {
        filter: grayscale(0%);
      }
    }
    .slick-dots {
      bottom: -35px;
      button::before {
        font-size: 18px;
      }
    }
    .slick-:active {
      button::before {
        color: ${theme.colors.orange};
      }
    }
  }
`;

export const SliderItem = styled.div`
  display: inline-flex !important;
  justify-content: center;
  > * {
    background-color: rgba(205, 190, 167, 0.3);
  }
  /* height: 100%; */
  img {
    box-shadow: 4.83px 1.294px 11.7px 1.3px rgba(0, 0, 0, 0.47);
  }
  @media ${screen.lp} {
    display: inline-block !important;
    margin-right: 20px;
    img {
      box-shadow: 4.83px 1.294px 11.7px 1.3px rgba(0, 0, 0, 0.47);
    }
  }
`;

export const CloseButton = styled.div`
  width: 56px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.orange};
  @media ${screen.lp} {
    top: 3%;
  }
`;
export const Line = styled.span`
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 16px;
  @media ${screen.lp} {
    font-size: 22px;
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
