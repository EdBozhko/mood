import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const TaglineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screen.lp} {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    width: 100%;
    height: 40%;
    flex-wrap: wrap;
    justify-content: space-between;
    user-select: none;
    > * {
      :first-child {
        align-self: flex-start;
      }
      :last-child {
        align-self: flex-end;
      }
    }
  }
`;
export const TaglineSpan = styled.span`
  font-family: ${theme.fontsFamily.quicksand};
  font-weight: 300;
  font-size: 18px;
  color: ${theme.colors.orange};
  text-transform: uppercase;
  @media ${screen.lp} {
    font-size: 30px;
  }
`;
