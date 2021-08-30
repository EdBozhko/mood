import theme from '@themeConfigs/theme';
import styled, { css } from 'styled-components';
import {screen} from '@themeConfigs/media'

interface BurgerButtonStyledProps {
  isMenuOpen?: boolean;
}
export const BurgerButtonStyled = styled.div<BurgerButtonStyledProps>`
order: 1;

  margin: 0 ;
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 8px 3px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  height: 56px;
  user-select: none;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  > * {
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    :nth-child(3) {
      left: 0;
    }
    :nth-child(4) {
      left: 0;
    }
    :nth-child(5) {
      bottom: 0;
    }
  }
  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      > * {
        :nth-child(1) {
          opacity: 1;
          top: 50%;
          left: 0;
          right: 0;
          transition: opacity 0.1s ease-in-out 0.1s, top 0.1s ease-in-out 0.1s, left 0.1s ease-in-out 0.1s, right 0.1s ease-in-out 0.1s;
        }
        :nth-child(2) {
          opacity: 1;
          top: 50%;
          left: unset;
          right: 0;
          transition: opacity 0.2s ease-in-out 0.2s, top 0.2s ease-in-out 0.2s, left 0.2s ease-in-out 0.2s, right 0.2s ease-in-out 0.2s;
        }
        :nth-child(3) {
          opacity: 0;
          left: -60px;
        }
        :nth-child(4) {
          opacity: 0;
          left: 60px;
        }
        :nth-child(5) {
          opacity: 0;
          bottom: -60px;
        }
      }
    `}

    @media ${screen.lp} {
      order: unset;
  margin: 0 auto;

    }
`;

export const LineOne = styled.span`
  position: relative;
  display: block;
  width: 50px;
  height: 2px;
  background-color: ${theme.colors.golden};
`;

export const LineTwo = styled(LineOne)`
  width: 40px;
  align-self: flex-start;
`;

export const LineThree = styled.span`
  position: relative;
  font-family: ${theme.fontsFamily.quicksand};
  font-size: 18.5px;
  font-weight: 400;
  line-height: 75%;
  color: ${theme.colors.golden};
`;

export const LineFour = styled.span`
  opacity: 0;
  position: absolute;
  display: block;
  width: 54px;
  height: 2px;
  background-color: ${theme.colors.golden};
  transform: translateY(-50%) rotate(45deg);
  top: -40%;
  left: -100%;
  transition: opacity 0s ease-in-out 0s, top 0s ease-in-out 0s, left 0s ease-in-out 0s, right 0s ease-in-out 0s;
`;

export const LineFive = styled(LineFour)`
  transform: translateY(-50%) rotate(-45deg);
  left: unset;
  right: -100%;
  transition: opacity 0.1s ease-in-out 0.1s, top 0.1s ease-in-out 0.1s, left 0.1s ease-in-out 0.1s, right 0.1s ease-in-out 0.1s;
`;
