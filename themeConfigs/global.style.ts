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
    #fp-nav ul li a span,
.fp-slidesNav ul li a span {

    height: 10px;
    width: 10px;

    background: ${theme.colors.beige};

    margin: 0;
    transform: translate(-50%, -50%);
    transition: height 0.8s ease 0s, width 0.8s ease 0s;

box-shadow: 4.83px 1.294px 11.7px 1.3px rgba(0, 0, 0, 0.004);

}
#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span{
    width: 10px;
    height: 10px;
    margin: unset;
}
#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span{
    height: 14px;
    width: 14px;
    margin: 0;
    border-radius: 100%;
 }
 #fp-nav.fp-right {
  right: 5px;

   @media ${screen.lp}{

     right: 17px;
   }
}
    @media ${screen.lp} {

      margin-left: 100px;
    }
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
