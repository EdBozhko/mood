import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface PhotoBlockProps {
  photo?: string;
}

export const TextBlockContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${theme.colors.brown};
  @media ${screen.lp} {
    padding: 150px 100px;
    box-sizing: border-box;
  }
`;

export const TextBlock = styled.p`
  padding: 20px;
  box-sizing: border-box;
  color: ${theme.colors.beige};
  display: block;
  width: 100%;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  font-size: 24px;
  font-weight: 300;
  line-height: 130%;
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  @media ${screen.lp} {
    padding: unset;
    box-sizing: unset;
    width: 70%;
    font-size: 30px;
    line-height: 140%;
  }
`;

export const PhotoBlock = styled.div<PhotoBlockProps>`
  width: 100vw;
  height: 60vw;
  background: url(${({ photo }) => photo}) center/cover no-repeat;
`;

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

export const TeamBlock = styled.section`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${theme.colors.grey};
  @media ${screen.lp} {
    padding: 100rem;
  }
`;
export const TeamList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${screen.lp} {
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: unset;
    align-items: unset;
  }
`;
export const TeamItem = styled.li`
  width: 100%;
  height: 80vh;
  margin-top: 25px;
  @media ${screen.tb} {
    width: 70%;
    height: 80vh;
  }
  @media ${screen.lp} {
    width: 27%;
    height: 500rem;
    margin-right: 10px;
  }
`;
