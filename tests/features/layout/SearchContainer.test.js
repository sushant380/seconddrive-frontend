import React from 'react';
import {shallow} from 'enzyme';
import {SearchContainer} from '../../../src/features/layout/SearchContainer';

describe('layout/SearchContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      layout: {},
      actions: {},
    };
    const renderedComponent = shallow(
        <SearchContainer {...props} />,
    );

    expect(
        renderedComponent.find('.layout-search-container').length,
    ).toBe(1);
  });
});
