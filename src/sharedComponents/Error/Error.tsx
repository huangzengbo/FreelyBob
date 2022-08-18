import React from 'react';
import {Text} from 'react-native';
import {ErrorDisplay} from '../../constants/errors';

function Error(): React.ReactElement {
  // TODO: Tracking here
  return <Text>{ErrorDisplay.GENERIC_ERROR}</Text>;
}

export default Error;
