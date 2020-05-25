import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../views/Home';

it('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
