import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import AddressIcon from './assets/static/maps-and-flags.svg';
import WorkingHoursIcon from './assets/static/clock.svg';

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0;
  background-color: ${theme.colors.grey};
  ::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.golden};
  }
  @media ${screen.lp} {
    height: 80%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    z-index: 1;
    background-color: rgba(68, 76, 92, 0.5);
  }
`;
export const Address = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  padding-left: 10px;
  padding-right: 50px;
  position: relative;
  cursor: pointer;
  ::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    transform: translateX(-100%);
    background: url(${AddressIcon}) center/cover no-repeat;
  }
`;
export const WorkingHours = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  padding-left: 10px;
  padding-right: 50px;
  position: relative;
  user-select: none;
  pointer-events: none;
  margin-top: 40px;
  ::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    left: 0;
    transform: translateX(-100%);
    background: url(${WorkingHoursIcon}) center/cover no-repeat;
  }
  @media ${screen.lp} {
    margin-top: 26px;
  }
`;
export const Title = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 20px;
  font-weight: 300;
  color: white;
  @media ${screen.lp} {
    font-size: 16px;
  }
`;
export const Subtitle = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 22px;
  font-weight: 400;
  line-height: 130%;
  color: white;
  margin-top: 15px;
  :hover {
    color: ${theme.colors.orange};
  }
  @media ${screen.lp} {
    font-size: 18px;
  }
`;
