export const size = {
  iphoneSE: '319px',
  mobile: '400px',
  mobileLarge: '430px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1400px',
  desktop: '1600px',
  desktopL: '1800px'
}

export const screen = {
  iSE: `(max-width: ${size.iphoneSE})`,
  sm: `(min-width: ${size.mobile})`,
  mobl: `(min-width: ${size.mobileLarge})`,
  tb: `(min-width: ${size.tablet})`,
  lp: `(min-width: ${size.laptop})`,
  md: `(min-width: ${size.laptopL})`,
  lg: `(min-width: ${size.desktop})`,
  xlg: `(min-width: ${size.desktopL})`
}
