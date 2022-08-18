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
        d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
        fill={foreground}
        fillRule="evenodd"
        fillOpacity={0.64}
      />
    </Svg>
  );
}

export default memo(Home);
