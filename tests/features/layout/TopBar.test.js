import React from 'react';
import {shallow} from 'enzyme';
import {TopBar} from '../../../src/features/layout/TopBar';

describe('layout/TopBar', () => {
  it('renders node with correct class name', () => {
    const props = {
      layout: {},
      actions: {},
    };
    const renderedComponent = shallow(
        <TopBar {...props} />,
    );

    expect(
        renderedComponent.find('.layout-top-bar').length,
    ).toBe(1);
  });
});
