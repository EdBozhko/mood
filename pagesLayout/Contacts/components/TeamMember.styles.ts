import styled, { css, keyframes } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

interface TeamMemberBackgroundProps {
  photoSrc?: string;
}

export const TeamMemberBackground = styled.div<TeamMemberBackgroundProps>`
  width: 100%;
  height: 100%;
  background: url(${({ photoSrc }) => photoSrc}) center/cover no-repeat;

  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0;
  position: relative;
`;
export const TeamMemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 20px;
  box-sizing: border-box;

  text-shadow: black 0 2px 3px;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.6)));
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
    background-blend-mode: overlay;
  }

  > * {
    z-index: 1;
    :not(:first-child) {
      margin-top: 10px;
    }
  }
  @media ${screen.lp} {
    padding: 20rem;
  }
`;
export const Name = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 600;
  font-size: 36px;
  color: ${theme.colors.white};
  @media ${screen.lp} {
    font-size: 36rem;
  }
`;
export const Position = styled.span`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 300;
  font-size: 22px;
  color: ${theme.colors.white};
  @media ${screen.lp} {
    font-size: 22rem;
  }
`;
export const Telephone = styled.a`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 600;
  font-size: 30px;
  color: ${theme.colors.beige};
  :hover {
    color: ${theme.colors.azure};
  }
  @media ${screen.lp} {
    font-size: 30rem;
  }
`;
