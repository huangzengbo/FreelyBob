import React, {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

interface IconProps extends SvgProps {
  active?: boolean;
}

function Trips({active, ...props}: IconProps) {
  const {palette} = useTheme();
  const foreground = active ? palette.secondary.main : palette.grey['500'];
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path
        d="m15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1H15.4zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z"
        fill={foreground}
        fillRule="evenodd"
        fillOpacity={0.64}
      />
    </Svg>
  );
}

export default memo(Trips);
