import React from 'react';
import {shallow} from 'enzyme';
import {SearchInput} from '../../../src/features/common/SearchInput';

describe('common/SearchInput', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
        <SearchInput {...props} />,
    );

    expect(
        renderedComponent.find('.common-search-input').length,
    ).toBe(1);
  });
});
