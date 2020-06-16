import {
  VIEWS_UPDATE_ITEM_COUNT,
} from '../../../../src/features/views/redux/constants';

import {
  updateItemCount,
  reducer,
} from '../../../../src/features/views/redux/updateItemCount';

describe('views/redux/updateItemCount', () => {
  it('returns correct action by updateItemCount', () => {
    expect(updateItemCount()).toHaveProperty('type', VIEWS_UPDATE_ITEM_COUNT);
  });

  it('handles action type VIEWS_UPDATE_ITEM_COUNT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VIEWS_UPDATE_ITEM_COUNT }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
