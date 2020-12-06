import React from 'react';
import { shallow } from 'enzyme';
import { AddReminderDialog } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AddReminderDialog />);
  expect(renderedComponent.find('.home-add-reminder-dialog').length).toBe(1);
});
