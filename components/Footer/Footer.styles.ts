import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import FooterBG from './assets/static/footerBG.jpg';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 100vh;
  background: url(${FooterBG});
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
  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    position: absolute;
    z-index: 0;
    opacity: 0.7;
  }
  #map {
    height: 100%;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 40%;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;
