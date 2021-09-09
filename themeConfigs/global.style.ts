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
    font-size: .0692vw
  }

  

body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    @media ${screen.lp} {
      padding-left: 100px;
box-sizing: border-box;
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

/* carousel navigation dots styles */


#fp-nav {
    position: fixed !important;
    z-index: 100 !important;
    top: 50% !important;
    opacity: 1 !important;
    transform: translateY(-50%) !important;
    -ms-transform: translateY(-50%) !important;
    -webkit-transform: translate3d(0,-50%,0) !important;
}
#fp-nav.fp-right {
    right: 17px !important;
}
#fp-nav.fp-left {
    left: 17px !important;
}
#fp-nav ul,
.fp-slidesNav ul {
  margin: 0 !important;
  padding: 0 !important;
  filter: url(#fancy-goo);
  #slider {
        width: 12px;
        height: 12px;
        /* margin: 8px 0; */

        border-radius: 50%;
        background: ${theme.colors.golden};
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        transition: 1.5s;
      }
      svg {
        display: none;
      }
}
#fp-nav ul li,
.fp-slidesNav ul li {
    display: block !important;
    width: 12px !important;
    height: 12px !important;
    margin: 8px 0 !important;
    position:relative !important;
    transition: 1.5s;
}
#fp-nav ul li a,
.fp-slidesNav ul li a {
    display: block !important;
    position: relative !important;
    z-index: 1 !important;
    width: 100% !important;
    height: 100% !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: 1.5s;
}
#fp-nav ul li a.active span,
.fp-slidesNav ul li a.active span,
#fp-nav ul li:hover a.active span,
.fp-slidesNav ul li:hover a.active span{
    height: 12px !important;
    width: 12px !important;
    margin: 0 !important;
    border-radius: 50% !important;
 }
#fp-nav ul li a span,
.fp-slidesNav ul li a span {
    border-radius: 50% !important;
    position: absolute !important;
    z-index: 1 !important;
    height: 12px !important;
    width: 12px !important;
    border: 0 !important;
    background: ${theme.colors.beige} !important;
    left: 0 !important;
    top: 0 !important;
    margin: 0 !important;
    -webkit-transition: all 1.5s ease-in-out !important;
    -moz-transition: all 1.5s ease-in-out !important;
    -o-transition: all 1.5s ease-in-out !important;
    transition: all 1.5s ease-in-out !important;
}
#fp-nav ul li:hover a span,
.fp-slidesNav ul li:hover a span{
    width: 12px !important;
    height: 12px !important;
    margin: 0px !important;
}
#fp-nav ul li .fp-tooltip {
    position: absolute !important;
    top: -2px !important;
    color: #fff !important;
    font-size: 14px !important;
    font-family: arial, helvetica, sans-serif !important;
    white-space: nowrap !important;
    max-width: 220px !important;
    overflow: hidden !important;
    display: block !important;
    opacity: 0 !important;
    width: 0 !important;
    cursor: pointer !important;
}
#fp-nav ul li:hover .fp-tooltip,
#fp-nav.fp-show-active a.active + .fp-tooltip {
    -webkit-transition: opacity 0.2s ease-in !important;
    transition: opacity 0.2s ease-in !important;
    width: auto !important;
    opacity: 1 !important;
}
#fp-nav ul li .fp-tooltip.fp-right {
    right: 20px !important;
}
#fp-nav ul li .fp-tooltip.fp-left {
    left: 20px !important;
}

`;
