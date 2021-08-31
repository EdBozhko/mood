import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import Column_1 from './assets/static/column_1.png';
import Column_2 from './assets/static/column_2.png';
import Column_3 from './assets/static/column_3.png';
import Column_4 from './assets/static/column_4.png';
import GalleriesBg from './assets/static/galleries_bg.jpg';

interface SliderWrapperProps {
  isSliderOpen?: boolean;
}

const flexSlide = css`
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

  height: 100%;
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
  height: 100vh;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  /* Safari */
  display: flex;
  overflow: hidden;
  @media ${screen.lp} {
    flex-direction: row;
  }
`;

export const ColumnOne = styled.div`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${Column_1})  center/cover no-repeat;
  animation: ${aboutFlexSlide} 3s 1;
  animation-delay: 0s;
`;

export const ColumnTwo = styled.div`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${Column_2})  center/cover no-repeat;
`;

export const ColumnThree = styled.div`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${Column_3})  center/cover no-repeat;
`;

export const ColumnFour = styled.div`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),  url(${Column_4})  center/cover no-repeat;
`;

export const Galleries = styled.section`
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  background: url(${GalleriesBg}) center/cover no-repeat;
  @media ${screen.lp} {
    width: 100%;
    padding: 120px 130px 120px 150px;
    box-sizing: border-box;
    background: url(${GalleriesBg}) center/cover no-repeat;
  }
`;

export const GalleriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screen.lp} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: unset;
  align-items: unset;
  }
`;

export const GalleriesItem = styled.li`
  width: 300px;
  height: 187px;
  margin-top: 20px;
  user-select: none;
  :last-child {
    margin-bottom: 20px;
  }
  @media ${screen.lp} {
    width: 300px;
    height: 187px;
    margin-top: 50px;
    margin-right: 50px;
    user-select: none;
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
  /* background: url(${GalleriesBg}) center/cover no-repeat; */
  position: fixed;
  z-index: 1;
  top: -100%;
  transition: top 0.5s ease;
  ${({ isSliderOpen }) =>
    isSliderOpen &&
    css`
      top: 0;
    `};
display: flex;
align-items: center;
@media ${screen.lp}{
  width: calc(100% - 100px);
  height: 100vh;
  padding: 100px;
  box-sizing: border-box;
  background-color: ${theme.colors.brown};
  /* background: url(${GalleriesBg}) center/cover no-repeat; */
  position: fixed;
  z-index: 1;
  top: -100%;
  transition: top 0.5s ease;
  ${({ isSliderOpen }) =>
    isSliderOpen &&
    css`
      top: 0;
    `};
}

`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

.slick-slider{
  top: 50%;
  transform: translateY(-50%);
}

  .slick-cloned {
      display: none;
    }
    .slick-slide {
    width: 100vw;}
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
  @media ${screen.lp}{
    width: 100%;
  height: 80%;
  .slick-slider{
  top: unset;
  transform: unset;
}
    .slick-track {
      display: block;

    }
  .slick-cloned {
    display: none;
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
    li.slick-active button:before {
      color: ${theme.colors.orange};
    }
    button::before {
      font-size: 18px;
      color: ${theme.colors.orange};
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
/* height: 100%; */
  img {
    box-shadow: 4.83px 1.294px 11.7px 1.3px rgba(0, 0, 0, 0.47);
  }
@media ${screen.lp}{
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
@media ${screen.lp}{
  width: 56px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  right: 5%;
  top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.orange};
}

`;
export const Line = styled.span`
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 16px;
  @media ${screen.lp}{
  font-size: 22px;

  }
`;
