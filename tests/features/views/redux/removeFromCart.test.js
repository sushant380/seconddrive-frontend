import {
  VIEWS_REMOVE_FROM_CART,
} from '../../../../src/features/views/redux/constants';

import {
  removeFromCart,
  reducer,
} from '../../../../src/features/views/redux/removeFromCart';

describe('views/redux/removeFromCart', () => {
  it('returns correct action by removeFromCart', () => {
    expect(removeFromCart()).toHaveProperty('type', VIEWS_REMOVE_FROM_CART);
  });

  it('handles action type VIEWS_REMOVE_FROM_CART correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: VIEWS_REMOVE_FROM_CART }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
