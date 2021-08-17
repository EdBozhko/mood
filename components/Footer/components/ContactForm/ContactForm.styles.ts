import styled from 'styled-components';
import theme from '@themeConfigs/theme';
import { screen } from '@themeConfigs/media';

export const Title = styled.span``;

export const Subtitle = styled.span``;

export const Heading = styled.h2``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const InputBox = styled.div`
  width: 81%;
  height: fit-content;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 20px 50px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  > * {
    width: 30%;
  }
`;

export const Name = styled.input`
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.golden};
  font-family: ${theme.fontsFamily.bloggerSans};
  color: ${theme.colors.beige};
  font-weight: 400;
  font-size: 28px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  ::placeholder {
    color: ${theme.colors.beige};
    opacity: 0.5;
  }
`;

export const Phone = styled(Name)``;

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
`;
