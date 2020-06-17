import React from 'react';
import {shallow} from 'enzyme';
import {Cart} from '../../../src/features/views/Cart';

describe('views/Cart', () => {
  it('renders node with correct class name', () => {
    const props = {
      views: {},
      actions: {},
    };
    const renderedComponent = shallow(
        <Cart {...props} />,
    );

    expect(
        renderedComponent.find('.views-cart').length,
    ).toBe(1);
  });
});
