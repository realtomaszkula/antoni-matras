export interface Colors {
  primaryDark: string;
  primary: string;
  primaryLight: string;
  accentDark: string;
  accent: string;
  accentLight: string;
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
    primaryLight: '#ec407a',
    primary: '#ec407a',
    primaryDark: '#ec407a',
    accentLight: '#ec407a',
    accent: '#ec407a',
    accentDark: '#ec407a',
  },
};

