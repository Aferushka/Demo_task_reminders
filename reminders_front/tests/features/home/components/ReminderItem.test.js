import React from 'react';
import { shallow } from 'enzyme';
import { ReminderItem } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReminderItem />);
  expect(renderedComponent.find('.home-reminder-item').length).toBe(1);
});
