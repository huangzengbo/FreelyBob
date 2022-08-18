import React from 'react';
import {Button as RNPButton} from 'react-native-paper';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = React.ComponentProps<typeof RNPButton>;

export default function Button({
  labelStyle,
  contentStyle,
  compact,
  ...props
}: ButtonProps) {
  const compactContentStyle = {paddingVertical: 10, paddingHorizontal: 20};

  const defaultLabelStyle: StyleProp<TextStyle> = [
    {
      letterSpacing: 0,
      marginHorizontal: 0,
      marginVertical: 0,
      lineHeight: 24,
      fontSize: compact ? 16 : 18,
    },
    labelStyle,
  ];
  const defaultContentStyle: StyleProp<ViewStyle> = [
    compact ? compactContentStyle : {padding: 16},
    contentStyle,
  ];

  // TODO: Tracking here

  return (
    <RNPButton
      contentStyle={defaultContentStyle}
      labelStyle={defaultLabelStyle}
      mode="contained"
      uppercase={false}
      {...props}
    />
  );
}
