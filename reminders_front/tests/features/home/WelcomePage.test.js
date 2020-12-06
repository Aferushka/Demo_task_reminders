import React from 'react';
import { shallow } from 'enzyme';
import { WelcomePage } from '../../../src/features/home/BaseContainer';

describe('home/BaseContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(<WelcomePage {...props} />);

    expect(renderedComponent.find('.home-welcome-page').length).toBe(1);
  });
});
