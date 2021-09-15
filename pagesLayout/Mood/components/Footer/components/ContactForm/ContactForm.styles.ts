import styled, { css } from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';
import InputMask from 'react-input-mask';

interface InputBoxProps {
  inputPerimeter?: {};
}

const InputStyle = css`
  padding: 9.5px 15px;

  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.golden};
  font-family: ${theme.fontsFamily.bloggerSans};
  color: ${theme.colors.beige};
  font-weight: 400;
  font-size: 22px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  :focus + svg rect {
    stroke-dashoffset: 0;
  }
  :active,
  :focus {
    outline: none;
  }
  ::-moz-focus-inner {
    border: 0;
  }
  ::placeholder {
    user-select: none;
    color: ${theme.colors.beige};
    opacity: 0.7;
  }
  :hover {
  }
  @media ${screen.lp} {
    padding: unset;

    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    border: none;
    border-bottom: 2px solid ${theme.colors.golden};
    font-family: ${theme.fontsFamily.bloggerSans};
    color: ${theme.colors.beige};
    font-weight: 400;
    font-size: 28rem;
    padding-left: 15rem;
    padding-right: 15rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    :focus + svg rect {
      stroke-dashoffset: 0;
    }
    :active,
    :focus {
      outline: none;
    }
    ::-moz-focus-inner {
      border: 0;
    }
    ::placeholder {
      user-select: none;
      color: ${theme.colors.beige};
      opacity: 0.7;
    }
    :hover {
    }
  }
`;

export const Title = styled.span`
  font-size: 36px;
  line-height: 40px;
  color: ${theme.colors.orange};
  padding: 20px;
  box-sizing: border-box;
  @media ${screen.lp} {
    font-size: 72rem;
    line-height: 86rem;
    color: ${theme.colors.orange};
    padding: unset;
    box-sizing: unset;
  }
`;

export const Subtitle = styled.span`
  font-size: 30px;
  line-height: 36px;
  color: ${theme.colors.beige};
  padding: 0 20px;
  box-sizing: border-box;
  @media ${screen.lp} {
    font-size: 60rem;
    line-height: 72rem;
    color: ${theme.colors.beige};
    padding: unset;
    box-sizing: unset;
  }
`;

export const Heading = styled.h2`
  font-family: ${theme.fontsFamily.bloggerSans};
  font-weight: 300;
  text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${screen.lp} {
    font-family: ${theme.fontsFamily.bloggerSans};
    font-weight: 300;
    text-shadow: 4.83px 1.294px 11.7px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  flex-shrink: 0;
  padding-bottom: 50px;
  @media ${screen.lp} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    flex-shrink: 0;
    padding-bottom: 50rem;
  }
`;

export const InputContainer = styled.div`
  width: 81%;
  height: fit-content;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  > * {
    width: 100%;
  }
  @media ${screen.lp} {
    width: 81%;
    height: fit-content;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    padding: 20rem 50rem;
    display: flex;
    flex-direction: unset;
    justify-content: space-between;
    margin-top: 100rem;
    > * {
      width: 30%;
    }
  }
`;

export const Name = styled.input`
  ${InputStyle}
`;

export const Phone = styled(InputMask)`
  ${InputStyle}
`;
export const InputBox = styled.div<InputBoxProps>`
  margin-bottom: 20px;
  position: relative;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: transparent;
    pointer-events: none;
    transform: scale(1, -1);
  }
  svg rect {
    position: absolute;
    stroke: ${theme.colors.golden};
    stroke-width: 4;
    transition: 1s;
    ${({ inputPerimeter }) =>
      inputPerimeter &&
      css`
        stroke-dasharray: ${inputPerimeter};
        stroke-dashoffset: ${inputPerimeter};
      `}
  }
  @media ${screen.lp} {
    margin-bottom: unset;
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: 0;
      fill: transparent;
      pointer-events: none;
      transform: scale(1, -1);
    }
    svg rect {
      position: absolute;
      stroke: ${theme.colors.golden};
      stroke-width: 4;
      transition: 1s;
      ${({ inputPerimeter }) =>
        inputPerimeter &&
        css`
          stroke-dasharray: ${inputPerimeter};
          stroke-dashoffset: ${inputPerimeter};
        `}
    }
  }
`;
export const Submit = styled.button`
  background-color: transparent;
  text-transform: uppercase;
  font-family: ${theme.fontsFamily.bloggerSans};
  color: ${theme.colors.beige};
  font-weight: 400;
  font-size: 30px;
  border: 2px solid ${theme.colors.golden};
  padding: 7px 15px;
  box-sizing: border-box;
  transition: background-color 0.5s ease;
  user-select: none;
  :hover {
    background-color: ${theme.colors.beige};
    color: ${theme.colors.golden};
  }
  :active {
    background-color: transparent;
    color: ${theme.colors.golden};
  }
  @media ${screen.lp} {
    background-color: transparent;
    text-transform: uppercase;
    font-family: ${theme.fontsFamily.bloggerSans};
    color: ${theme.colors.beige};
    font-weight: 400;
    font-size: 30rem;
    border: 2px solid ${theme.colors.golden};
    padding: 7rem 15rem;
    box-sizing: border-box;
    transition: background-color 0.5s ease;
    user-select: none;
    :hover {
      background-color: ${theme.colors.beige};
      color: ${theme.colors.golden};
    }
    :active {
      background-color: transparent;
      color: ${theme.colors.golden};
    }
  }
`;
