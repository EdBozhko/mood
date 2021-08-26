import { screen } from '@themeConfigs/media';
import theme from '@themeConfigs/theme';
import styled from 'styled-components';
import { style, variant } from 'styled-system';

export const PaginationWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 2.3vw;
  height: 100%;
  z-index: 2;
`;

interface PaginationDotProps {
  onClick?: () => void;
  active?: boolean;
}

export const PaginationDot = styled.div<PaginationDotProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${theme.colors.beige};
  transition: height 0.8s ease 0s, width 0.8s ease 0s;

  box-shadow: 4.83px 1.294px 11.7px 1.3px rgba(0, 0, 0, 0.004);

  :not(:last-child) {
    margin-bottom: 20px;
  }
  ${variant({
    prop: 'active',
    variants: {
      true: {
        width: '20px',
        height: '20px',
      },
    },
  })}
`;
