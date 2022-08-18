import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {useTheme} from 'styled-components/native';

import {AppFontPrimary} from '../../styles/theme';

const getFontFamily = (weight?: string) => {
  switch (weight) {
    case '700':
    case 'bold':
      return AppFontPrimary.BOLD;
    case '600':
      return AppFontPrimary.SEMI_BOLD;
    case '500':
      return AppFontPrimary.MEDIUM;
    case 'normal':
    case '400':
    default:
      return AppFontPrimary.REGULAR;
  }
};

const joinStyleArray = (style: TextStyle[]) =>
  style.reduce((combinedStyles, currentElement) => ({
    ...combinedStyles,
    ...currentElement,
  }));

interface CustomTextProps extends TextProps {
  children: ReactNode | string;
  style?: TextStyle;
}

const CustomText = ({children, style, ...otherProps}: CustomTextProps) => {
  let fontFamily = AppFontPrimary.SEMI_BOLD;
  const {palette} = useTheme();

  let hydratedStyle;

  if (typeof style !== 'undefined') {
    if (Array.isArray(style)) {
      fontFamily = getFontFamily(style[0].fontWeight);
      hydratedStyle = {fontFamily, ...joinStyleArray(style)};
    } else {
      fontFamily = getFontFamily(style.fontWeight);
      hydratedStyle = {fontFamily, ...style};
    }
  }
  return (
    <Text
      {...otherProps}
      style={{color: palette.text.primary, ...hydratedStyle}}>
      {children}
    </Text>
  );
};

export default CustomText;
