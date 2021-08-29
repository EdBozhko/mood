import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const TaglineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;
  @media ${screen.lp} {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    width: 100%;
    height: 290px;
    flex-wrap: wrap;
    justify-content: space-between;
    user-select: none;
    > * {
      :last-child {
        align-self: flex-end;
      }
    }
  }
`;
export const TaglineSpan = styled.span`
  font-family: ${theme.fontsFamily.quicksand};
  font-weight: 300;
  font-size: 16px;
  color: ${theme.colors.orange};
  text-transform: uppercase;
  @media ${screen.lp} {
    font-size: 30px;
  }
`;
