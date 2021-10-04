import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface IllustrationProps {
  illustrationHeight?: number;
  imgUrl?: string;
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

const lineAnimation = keyframes`
    0% {
    width: 0%;
    }
    100% {
        width: 50%;
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${({ columnImg }) => columnImg})  center/cover no-repeat;
  animation: ${aboutFlexSlide} 3s 1;
  animation-delay: 0s;
`;

export const ColumnTwo = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${({ columnImg }) => columnImg}) center/cover no-repeat;
`;

export const ColumnThree = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${({ columnImg }) => columnImg}) center/cover no-repeat;
`;

export const ColumnFour = styled.div<ColumnProps>`
  ${flexSlide}
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${({ columnImg }) => columnImg}) center/cover no-repeat;
`;

export const StepsContainer = styled.section`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${theme.colors.brown};
  @media ${screen.lp} {
    padding: 100rem;
  }
`;

export const StepsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${screen.tb} {
    flex-direction: row;
  }
`;

export const StepsItem = styled.li`
  width: 100%;
  :not(:first-child) {
    margin-top: 200rem;
  }
  @media ${screen.tb} {
    width: 30%;
    :not(:first-child) {
      margin-top: 0;
    }
  }
`;

export const Illustration = styled.div<IllustrationProps>`
  width: 100%;
  height: 100%;
  ${({ illustrationHeight }) =>
    illustrationHeight &&
    css`
      height: ${illustrationHeight}px;
      @media ${screen.tb} {
        height: ${illustrationHeight * 0.3}px;
      }
    `}
  background: url(${({ imgUrl }) => imgUrl}) center/100% 100% no-repeat;
`;

export const Description = styled.p`
  color: ${theme.colors.beige};
  display: block;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 24px;
  font-weight: 300;
  line-height: 130%;
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  margin-top: 150rem;
  padding-top: 150rem;
  box-sizing: border-box;
  position: relative;
  ::before {
    content: '';
    width: 0;
    height: 1px;
    background-color: ${theme.colors.orange};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: ${lineAnimation} 0.5s both;
    animation-delay: 5s;
  }
  @media ${screen.lp} {
    font-size: 30px;
    line-height: 140%;
    margin-top: 30rem;
    padding-top: 30rem;
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
