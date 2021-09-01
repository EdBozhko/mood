import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import FooterBG from './assets/static/footerBG.jpg';

interface FooterStyledProps {
  page?: boolean;
}
interface MapBoxProps {
  page?: boolean;
}

export const FooterStyled = styled.footer<FooterStyledProps>`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${FooterBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  background-attachment: fixed;
  align-items: center;
  justify-content: center;
  position: relative;
  ${({ page }) =>
    page &&
    css`
      display: none;
    `}
  #map {
    height: 100%;
  }
  @media ${screen.lp} {
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${FooterBG});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    align-items: center;
    justify-content: center;
    position: relative;
    ${({ page }) =>
      page &&
      css`
        display: none;
      `}
    #map {
      height: 100%;
    }
  }
`;

export const MapBox = styled.div<MapBoxProps>`
  width: 100%;
  height: 50vh;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  ${({ page }) =>
    page &&
    css`
      display: none;
    `}
  @media ${screen.lp} {
    width: 100%;
    height: 40%;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
    ${({ page }) =>
      page &&
      css`
        display: none;
      `}
  }
`;
