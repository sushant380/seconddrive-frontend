import React from 'react';
import { shallow } from 'enzyme';
import { CarTable } from '../../../src/features/common/CarTable';

describe('common/CarTable', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CarTable {...props} />
    );

    expect(
      renderedComponent.find('.common-car-table').length
    ).toBe(1);
  });
});
