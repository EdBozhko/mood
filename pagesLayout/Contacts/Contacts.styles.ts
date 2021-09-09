import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const TeamBlock = styled.section`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${theme.colors.grey};
  @media ${screen.lp} {
    width: 100%;
    padding: 100px;
    box-sizing: border-box;
    background-color: ${theme.colors.grey};
  }
`;
export const TeamList = styled.ul`
  width: 100%;
  height: 100%;
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
export const TeamItem = styled.li`
  width: 100%;
  height: 80vh;
  margin-top: 25px;
  @media ${screen.lp} {
    width: 27%;
    height: 500rem;
    margin-right: 10px;
    margin-top: 25px;
  }
`;
