import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const HeaderStyled = styled.header`
  min-height: 80px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.brown};
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  z-index: 999;
  @media ${screen.lp} {
    flex-direction: row;
    padding: 40px 13px;
    left: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 5px 16px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 100%;
  @media ${screen.lp} {
    width: 74px;
    height: 100%;
    flex-direction: column;
  }
`;
