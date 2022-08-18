import React, {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

interface IconProps extends SvgProps {
  active?: boolean;
}

function Home({active, ...props}: IconProps) {
  const {palette} = useTheme();
  const foreground = active ? palette.secondary.main : palette.grey['500'];
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"
        fill={foreground}
        fillRule="evenodd"
        fillOpacity={0.64}
      />
    </Svg>
  );
}

export default memo(Home);
