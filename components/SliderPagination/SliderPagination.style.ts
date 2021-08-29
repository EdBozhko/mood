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

  box-shadow: 4.83rem 1.294rem 11.7rem 1.3rem rgba(0, 0, 0, 0.004);

  :not(:last-child) {
    margin-bottom: 20px;
  }
  ${variant({
    prop: 'active',
    variants: {
      true: {
        transform: 'scale(135%)',
      },
    },
  })}
`;
