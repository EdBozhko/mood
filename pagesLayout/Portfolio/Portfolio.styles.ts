import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import Column_1 from './assets/static/column_1.png';
import Column_2 from './assets/static/column_2.png';
import Column_3 from './assets/static/column_3.png';
import Column_4 from './assets/static/column_4.png';
import GalleriesBg from './assets/static/galleries_bg.jpg';

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
  padding: 120px 130px 120px 150px;
  box-sizing: border-box;
  background: url(${GalleriesBg}) center/cover no-repeat;
`;

export const GalleriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const GalleriesItem = styled.li`
  width: 300px;
  height: 187px;
  margin-top: 50px;
  margin-right: 50px;
  user-select: none;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 120px;
  box-sizing: border-box;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const SliderItem = styled.div`
  /* position: relative;
  height: 500px;
  width: 100%; */
  /* margin-right: 20px; */
`;
