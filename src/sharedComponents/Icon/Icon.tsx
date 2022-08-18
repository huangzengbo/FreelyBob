/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {ComponentProps, memo} from 'react';

import Home from '../../assets/images/Home';
import Trips from '../../assets/images/Trips';
import Loading from '../../assets/images/Loading';

const icon = {
  Home,
  Trips,
  Loading,
};

type IconList = typeof icon;

export type IconName = keyof IconList;

export interface IconProps<K> {
  name: K | string;
}

function Icon<K extends IconName>({
  name,
  ...props
}: IconProps<K> & ComponentProps<IconList[K]>) {
  const keyName = name as IconName;
  if (icon[keyName]) {
    const Comp = icon[keyName];

    return <Comp {...props} />;
  }

  return null;
}

export default memo(Icon);
