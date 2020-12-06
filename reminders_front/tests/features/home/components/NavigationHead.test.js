import React from 'react';
import { shallow } from 'enzyme';
import { NavigationHead } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NavigationHead />);
  expect(renderedComponent.find('.home-navigation-head').length).toBe(1);
});
