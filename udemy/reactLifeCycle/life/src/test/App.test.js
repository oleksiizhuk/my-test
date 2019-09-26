import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from '../App';

it('renders correctly when there are no items', () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
