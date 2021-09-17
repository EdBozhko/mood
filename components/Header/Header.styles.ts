import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.brown};
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  z-index: 999;
  @media ${screen.lp} {
    flex-direction: row;
    padding: 40px 13px;
    width: fit-content;
    height: 100vh;
    left: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${screen.lp} {
    flex-direction: column;
    align-items: unset;
    width: 74px;
    height: 100%;
    position: relative;
  }
`;
