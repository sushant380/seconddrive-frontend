import {
  VIEWS_ADD_TO_CART,
} from '../../../../src/features/views/redux/constants';

import {
  addToCart,
  reducer,
} from '../../../../src/features/views/redux/addToCart';

describe('views/redux/addToCart', () => {
  it('returns correct action by addToCart', () => {
    expect(addToCart()).toHaveProperty('type', VIEWS_ADD_TO_CART);
  });

  it('handles action type VIEWS_ADD_TO_CART correctly', () => {
    const prevState = {};
    const state = reducer(
        prevState,
        {type: VIEWS_ADD_TO_CART},
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
