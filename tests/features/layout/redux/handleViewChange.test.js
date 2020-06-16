import {
  LAYOUT_HANDLE_VIEW_CHANGE,
} from '../../../../src/features/layout/redux/constants';

import {
  handleViewChange,
  reducer,
} from '../../../../src/features/layout/redux/handleViewChange';

describe('layout/redux/handleViewChange', () => {
  it('returns correct action by handleViewChange', () => {
    expect(handleViewChange()).toHaveProperty('type', LAYOUT_HANDLE_VIEW_CHANGE);
  });

  it('handles action type LAYOUT_HANDLE_VIEW_CHANGE correctly', () => {
    const prevState = {};
    const state = reducer(
        prevState,
        {type: LAYOUT_HANDLE_VIEW_CHANGE},
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
