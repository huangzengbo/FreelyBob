enum ColourPalette {
  WHITE = '#fff',
  SHAMROCK = '#38DE80',
  JUMBO = '#74707A',
  SHIP_GREY = '#3E3747',
  BASTILLE = '#282132',
  AMARANTH = '#ED2647',
  SCHOOL_BUS_YELLOW = '#FFDB00',
  ALABASTER = '#fafafa',
  LYNX_WHITE = '#F7F7F7',
  MERCURY = '#E8E8E8',
  QUILL_GREY = '#CFCFCC',
  GREY_NICKEL = '#B3B3B0',
}

export const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'light',
  primary: {
    // lightest: '',
    // lighter: '',
    // light: '',
    main: ColourPalette.SHAMROCK, // #38DE80
    // dark: '',
    // contrastText: '',
  },
  secondary: {
    // lightest: '',
    lighter: ColourPalette.JUMBO, // #74707A
    light: ColourPalette.SHIP_GREY, // #3E3747
    main: ColourPalette.BASTILLE, // #282132
    // dark: '',
    contrastText: ColourPalette.LYNX_WHITE, // #F7F7F7
  },
  error: {
    main: ColourPalette.AMARANTH, // #ED2647
    // light: '',
    // dark: '',
    // contrastText: '',
  },
  warning: {
    // dark: '',
    main: ColourPalette.SCHOOL_BUS_YELLOW, // #FFDB00,
    // light: '',
    // contrastText: '',
  },
  info: {
    // main: '',
    // light: '',
    // dark: '',
    contrastText: ColourPalette.BASTILLE, // #282132
  },
  success: {
    main: ColourPalette.SHAMROCK, // #38DE80
    // light: '',
    // dark: '',
    // contrastText: '',
  },
  grey: {
    '50': ColourPalette.ALABASTER, // #fafafa
    '100': ColourPalette.LYNX_WHITE, // #F7F7F7
    // '200': '',
    '300': ColourPalette.MERCURY, // #E8E8E8
    '400': ColourPalette.QUILL_GREY, // #CFCFCC
    '500': ColourPalette.GREY_NICKEL, // #B3B3B0
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: ColourPalette.BASTILLE, // #282132
    secondary: ColourPalette.JUMBO, // #74707A
    // disabled: '',
    // hint: '',
  },
  divider: ColourPalette.QUILL_GREY, // #CFCFCC
  background: {
    paper: ColourPalette.WHITE, // #FFFFFF
    default: ColourPalette.LYNX_WHITE, // #F7F7F7
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  SCREEN_BACKGROUND: '#ECF0F4',
  TEXT: '#000000',
  TRIP_CARD_BACKGROUND: '#FFFFFF',
  TRIP_CARD_BACKGROUND_HIGHLIGHTED: '#C6FBF8',
};

export type Palette = typeof palette;

export default ColourPalette;
