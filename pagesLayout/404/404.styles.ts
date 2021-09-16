import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import SVG from './assets/static/cat.svg';

export const SVGContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 16px;
  box-sizing: border-box;
  position: absolute;
  background: url(${SVG}) bottom / 80% no-repeat, ${theme.colors.grey};
  @media ${screen.lp} {
    padding: 50px;
    background: url(${SVG}) bottom right/70% 70% no-repeat, ${theme.colors.grey};
  }
`;
