/**
 * @format
 */

import 'react-native';
import React from 'react';
import Card from './Card';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Card comp renders correctly', () => {
  renderer.create(
    <Card
      title="test title"
      detail="test detail"
      footer="test footer"
      highlight
    />,
  );
});
