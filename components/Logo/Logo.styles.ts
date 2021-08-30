import styled from 'styled-components';

import { screen } from '@themeConfigs/media';

export const LogoStyled = styled.svg`
  width:auto;
  height:70px;
@media ${screen.lp} {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width:74px;
  height:auto;
} 
`;
