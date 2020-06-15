import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '../../../src/features/layout/Main';

describe('layout/Main', () => {
  it('renders node with correct class name', () => {
    const props = {
      layout: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Main {...props} />
    );

    expect(
      renderedComponent.find('.layout-main').length
    ).toBe(1);
  });
});
