import React from 'react';
import { shallow } from 'enzyme';
import { CarGrid } from '../../../src/features/common/CarGrid';

describe('common/CarGrid', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CarGrid {...props} />
    );

    expect(
      renderedComponent.find('.common-car-grid').length
    ).toBe(1);
  });
});
