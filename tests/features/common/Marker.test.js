import React from 'react';
import {shallow} from 'enzyme';
import {Marker} from '../../../src/features/common';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Marker />);
  expect(renderedComponent.find('.common-marker').length).toBe(1);
});
