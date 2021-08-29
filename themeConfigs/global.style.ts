import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily } from 'styled-system';
import theme from './theme';
import { screen } from './media';

export const GlobalStyle = createGlobalStyle`
${reset};

* {
  scrollbar-width: thin;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: ${theme.colors.brown};
}

*::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.golden};
  border-radius: 20px;
  border: 1px solid ${theme.colors.brown};
}

html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: grayscale;
    -moz-font-smoothing: grayscale;
    scroll-behavior:smooth;
  }

  

body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    margin-left: 100px;
}

a {
    text-decoration: none;
  }

a,
input,
input::placeholder,
button,
textarea {
  font-family: inherit;
}

button {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

/* Webkit autocomplete background remove */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}
`;
