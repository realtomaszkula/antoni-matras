export interface Colors {
  primaryDark: string;
  primary: string;
  primaryLight: string;
  accentDark: string;
  accent: string;
  accentLight: string;
  white: string;
  black: string;
}

export interface Layout {
  headerHeight: string;
}
export interface Theme {
  colors: Colors;
  layout: Layout;
}

export const theme: Theme = {
  layout: { headerHeight: '84px' },
  colors: {
    primaryLight: '#273755',
    primary: '#273755',
    primaryDark: '#273755',
    accentLight: '#ec407a',
    accent: '#ec407a',
    accentDark: '#ec407a',
    white: 'white',
    black: 'black',
  },
};
