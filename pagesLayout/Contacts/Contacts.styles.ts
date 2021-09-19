import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const H1 = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0px;
  padding: 0px;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const TelephoneBlock = styled.div`
  background-color: ${theme.colors.brown};
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${screen.lp} {
    padding: 60px;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 36px;
  font-weight: 300;
  line-height: 40px;
  text-align: center;
  color: ${theme.colors.orange};
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    font-size: 100rem;
    line-height: 120rem;
  }
`;

export const Telephone = styled.a`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 600;
  font-size: 30px;
  color: ${theme.colors.beige};
  margin-top: 40rem;
  :hover {
    color: ${theme.colors.azure};
  }
  @media ${screen.lp} {
    font-size: 60rem;
  }
`;
