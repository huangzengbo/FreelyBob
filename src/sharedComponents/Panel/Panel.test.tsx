/**
 * @format
 */

import 'react-native';
import React from 'react';
import Panel from './Panel';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Panel comp renders correctly', () => {
  renderer.create(
    <Panel title="test title" detailList={['test 111', 'test 222']} />,
  );
});
