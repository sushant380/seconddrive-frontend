import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  VIEWS_UPDATE_ITEM_COUNT,
  VIEWS_UPDATE_CART_TOTAL,
} from './constants';

export function updateItemCount(lineIndex, count) {
  return (dispatch) => {
    dispatch({
      type: VIEWS_UPDATE_ITEM_COUNT,
      count,
      lineIndex,
    });
    dispatch({
      type: VIEWS_UPDATE_CART_TOTAL,
    });
  };
}

export function useUpdateItemCount() {
  const dispatch = useDispatch();
  const lineItems = useSelector((state) => state.views.lineItems);
  const boundAction = useCallback((...params) => dispatch(updateItemCount(...params)), [dispatch]);
  return {lineItems, updateItemCount: boundAction};
}

export function reducer(state, action) {
  switch (action.type) {
    case VIEWS_UPDATE_ITEM_COUNT:
      const {lineItems}=state;
      const {count, lineIndex}=action;
      const lineItem=lineItems.find((line)=> line._id===lineIndex);
      lineItem.quantity=count;
      return {
        ...state,
        lineItems,
        lineCount: lineItems.length,
      };

    default:
      return state;
  }
}
