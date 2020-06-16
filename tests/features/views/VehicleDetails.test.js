import React from 'react';
import {shallow} from 'enzyme';
import {VehicleDetails} from '../../../src/features/views/VehicleDetails';

describe('views/VehicleDetails', () => {
  it('renders node with correct class name', () => {
    const props = {
      views: {},
      actions: {},
    };
    const renderedComponent = shallow(
        <VehicleDetails {...props} />,
    );

    expect(
        renderedComponent.find('.views-vehicle-details').length,
    ).toBe(1);
  });
});
