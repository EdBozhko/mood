import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const Social = styled.a`
  svg {
    height: 56px;
    width: auto;
    fill: ${theme.colors.beige};
    :hover {
      fill: ${theme.colors.orange};
      transform: scale(110%);
    }
  }
`;
