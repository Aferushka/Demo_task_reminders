import React from 'react';
import { shallow } from 'enzyme';
import { LoadingTemplate } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LoadingTemplate />);
  expect(renderedComponent.find('.home-loading-template').length).toBe(1);
});
