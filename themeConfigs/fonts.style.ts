import { createGlobalStyle } from 'styled-components';

import BloggerSansLightOtf from '@public/fonts/Blogger_Sans/Blogger_Sans_Light.otf';
import BloggerSansLightWoff from '@public/fonts/Blogger_Sans/Blogger_Sans_Light.woff';
import BloggerSansLightWoff2 from '@public/fonts/Blogger_Sans/Blogger_Sans_Light.woff2';

import BloggerSansRegularOtf from '@public/fonts/Blogger_Sans/Blogger_Sans_Regular.otf';
import BloggerSansRegularWoff from '@public/fonts/Blogger_Sans/Blogger_Sans_Regular.woff';
import BloggerSansRegularWoff2 from '@public/fonts/Blogger_Sans/Blogger_Sans_Regular.woff2';

import QuicksandLightOtf from '@public/fonts/Quicksand/Quicksand-Light.otf';
import QuicksandLightTtf from '@public/fonts/Quicksand/Quicksand-Light.ttf';
import QuicksandLightWoff from '@public/fonts/Quicksand/Quicksand-Light.woff';
import QuicksandLightWoff2 from '@public/fonts/Quicksand/Quicksand-Light.woff2';

import QuicksandRegularOtf from '@public/fonts/Quicksand/Quicksand-Regular.otf';
import QuicksandRegularTtf from '@public/fonts/Quicksand/Quicksand-Regular.ttf';
import QuicksandRegularWoff from '@public/fonts/Quicksand/Quicksand-Regular.woff';
import QuicksandRegularWoff2 from '@public/fonts/Quicksand/Quicksand-Regular.woff2';

export const Fonts = createGlobalStyle`
@font-face {
    font-family: 'BloggerSans';
    src: local('BloggerSansLight') ,
    url(${BloggerSansLightOtf}) format('otf'),
    url(${BloggerSansLightWoff}) format('woff'),
    url(${BloggerSansLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'BloggerSans';
    src: local('BloggerSansRegular') ,
    url(${BloggerSansRegularOtf}) format('otf'),
    url(${BloggerSansRegularWoff}) format('woff'),
    url(${BloggerSansRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Quicksand';
    src: local('QuicksandLight') ,
    url(${QuicksandLightOtf}) format('otf'),
    url(${QuicksandLightTtf}) format('ttf'),
    url(${QuicksandLightWoff}) format('woff'),
    url(${QuicksandLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Quicksand';
    src: local('QuicksandRegular') ,
    url(${QuicksandRegularOtf}) format('otf'),
    url(${QuicksandRegularTtf}) format('ttf'),
    url(${QuicksandRegularWoff}) format('woff'),
    url(${QuicksandRegularWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
`;
