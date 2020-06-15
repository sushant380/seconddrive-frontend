import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../src/features/layout/Footer';

describe('layout/Footer', () => {
  it('renders node with correct class name', () => {
    const props = {
      layout: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Footer {...props} />
    );

    expect(
      renderedComponent.find('.layout-footer').length
    ).toBe(1);
  });
});
