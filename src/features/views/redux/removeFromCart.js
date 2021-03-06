import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  VIEWS_REMOVE_FROM_CART,
  VIEWS_UPDATE_CART_TOTAL,
} from './constants';

export function removeFromCart(lineId) {
  return (dispatch) => {
    dispatch({
      type: VIEWS_REMOVE_FROM_CART,
      lineId,
    });
    dispatch({
      type: VIEWS_UPDATE_CART_TOTAL,
    });
  };
}

export function useRemoveFromCart() {
  const dispatch = useDispatch();
  const lineItems = useSelector((state) => state.views.lineItems);
  const lineCount = useSelector((state) => state.views.lineCount);
  const boundAction = useCallback((...params) => dispatch(removeFromCart(...params)), [dispatch]);
  return {lineItems, lineCount, removeFromCart: boundAction};
}

export function reducer(state, action) {
  switch (action.type) {
    case VIEWS_REMOVE_FROM_CART:
      const {lineItems}=state;
      const {lineId}=action;
      const lineIndex=lineItems.findIndex((line)=> line._id=lineId);
      lineItems.splice(lineIndex, 1);
      return {
        ...state,
        lineItems,
        lineCount: lineItems.length,
      };
    default:
      return state;
  }
}
