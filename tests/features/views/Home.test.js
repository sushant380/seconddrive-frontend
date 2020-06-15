import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../../src/features/views/Home';

describe('views/Home', () => {
  it('renders node with correct class name', () => {
    const props = {
      views: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Home {...props} />
    );

    expect(
      renderedComponent.find('.views-home').length
    ).toBe(1);
  });
});
