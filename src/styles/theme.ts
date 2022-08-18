import {DefaultTheme, configureFonts} from 'react-native-paper';
import {Fonts} from 'react-native-paper/lib/typescript/types';

import {palette} from './colourPalette';

export enum AppFontPrimary {
  BOLD = 'SFProDisplay-Bold',
  SEMI_BOLD = 'SFProDisplay-SemiBold',
  MEDIUM = 'SFProDisplay-Medium',
  REGULAR = 'SFProDisplay-Regular',
}

const fonts: Fonts = {
  regular: {
    fontFamily: AppFontPrimary.REGULAR,
    fontWeight: '400',
  },
  medium: {
    fontFamily: AppFontPrimary.REGULAR,
    fontWeight: 'bold',
  },
  light: {
    fontFamily: AppFontPrimary.REGULAR,
    fontWeight: '300',
  },
  thin: {
    fontFamily: AppFontPrimary.REGULAR,
    fontWeight: '200',
  },
};

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      success: string;
    }
  }
}

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 1023,
      lg: 1280,
      xl: 1440,
    },
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  overrides: {},
  palette,

  shape: {
    borderRadius: 8,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
};

export type Theme = typeof theme;

export const paperTheme = {
  ...DefaultTheme,
  roundness: 8,

  colors: {
    ...DefaultTheme.colors,
    primary: theme.palette.primary.main,
    accent: theme.palette.primary.main,
    background: theme.palette.grey['500'],
    surface: theme.palette.common.white,
    text: theme.palette.text.primary,
    onSurface: theme.palette.grey['300'],
    success: theme.palette.success.main,
  },
  fonts: configureFonts({ios: fonts, android: fonts}),
};

export default theme;
