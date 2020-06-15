import React from 'react';
import { shallow } from 'enzyme';
import { ResultContainer } from '../../../src/features/layout/ResultContainer';

describe('layout/ResultContainer', () => {
  it('renders node with correct class name', () => {
    const props = {
      layout: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ResultContainer {...props} />
    );

    expect(
      renderedComponent.find('.layout-result-container').length
    ).toBe(1);
  });
});
