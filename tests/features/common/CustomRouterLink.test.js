import React from 'react';
import {shallow} from 'enzyme';
import {CustomRouterLink} from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CustomRouterLink />);
  expect(renderedComponent.find('.common-custom-router-link').length).toBe(1);
});
