import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import FooterBG from './assets/static/footerBG.jpg';

export const FooterStyled = styled.footer`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${FooterBG}), ${theme.colors.brown};
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
  #map {
    height: 100%;
  }
  @media ${screen.lp} {
    height: 100vh;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);
  @media ${screen.lp} {
    height: 40%;
  }
`;
