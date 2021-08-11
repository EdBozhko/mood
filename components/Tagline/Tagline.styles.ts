import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const TaglineStyled = styled.div`
  writing-mode: tb-rl;
  transform: rotate(180deg);
  width: 100%;
  height: 290px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  user-select: none;
  > * {
    :last-child {
      align-self: flex-end;
    }
  }
`;
export const TaglineSpan = styled.span`
  font-family: ${theme.fontsFamily.quicksand};
  font-weight: 300;
  font-size: 30px;
  color: ${theme.colors.golden};
  text-transform: uppercase;
`;
