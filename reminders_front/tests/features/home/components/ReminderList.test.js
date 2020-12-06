import React from 'react';
import { shallow } from 'enzyme';
import { ReminderList } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReminderList />);
  expect(renderedComponent.find('.home-reminder-list').length).toBe(1);
});
