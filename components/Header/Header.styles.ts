import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const HeaderStyled = styled.header`
  padding: 40px 13px;
  box-sizing: border-box;
  width: fit-content;
  height: 100vh;
  display: flex;
  background-color: ${theme.colors.brown};
  box-shadow: 0px 0px 13px 8px rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 74px;
  height: 100%;
`;
