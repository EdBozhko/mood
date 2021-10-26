import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface SVGContainerProps {
  backgroundImg?: string;
}

export const SVGContainer = styled.div<SVGContainerProps>`
  width: 100%;
  height: 100%;
  padding: 5px 16px;
  box-sizing: border-box;
  position: absolute;
  background: url(${({ backgroundImg }) => backgroundImg}) bottom / 80% no-repeat, ${theme.colors.grey};
  @media ${screen.lp} {
    padding: 50px;
    background: url(${({ backgroundImg }) => backgroundImg}) bottom right/70% 70% no-repeat, ${theme.colors.grey};
  }
`;
