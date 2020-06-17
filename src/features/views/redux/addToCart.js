import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  VIEWS_ADD_TO_CART,
  VIEWS_UPDATE_CART_TOTAL,
} from './constants';
import Config from '../../../Config.json';

export function addToCart(vehicle) {
  return (dispatch) => {
    dispatch({
      type: VIEWS_ADD_TO_CART,
      vehicle,
    });
    dispatch({
      type: VIEWS_UPDATE_CART_TOTAL,
    });
  };
};

export function useAddToCart() {
  const dispatch = useDispatch();
  const lineItems = useSelector((state) => state.views.lineItems);
  const searchList = useSelector((state) => state.common.searchList);
  const boundAction = useCallback((...params) => dispatch(addToCart(...params)), [dispatch]);
  const lineCount=lineItems.length;
  return {lineItems, searchList, lineCount, addToCart: boundAction};
}

export function reducer(state, action) {
  switch (action.type) {
    case VIEWS_UPDATE_CART_TOTAL:
      console.log('called ');
      let {lineItems} = state;
      const totals = calculateTotal(lineItems);
      return {
        ...state,
        ...totals,
      };
    case VIEWS_ADD_TO_CART:
      lineItems = state.lineItems;
      const {vehicle} = action;
      const items = cartUpdate(vehicle, lineItems);
      return {
        ...state,
        lineItems: items,
        lineCount: items.length,
      };
    default:
      return state;
  }
}
function cartUpdate(vehicle, lineItems) {
  console.log(vehicle, lineItems);
  const lineItem = lineItems.find((line) => line._id === vehicle._id);
  if (lineItem) {
    lineItem.quantity += 1;
  } else {
    const newLineItem = {
      ...vehicle,
      quantity: 1,
    };
    lineItems.push(newLineItem);
  }
  return lineItems;
}
function calculateTotal(lineItems) {
  let subtotalPrice =0;
  lineItems.forEach((line) => {
    subtotalPrice += (line.price * line.quantity);
  });
  const totalTax = subtotalPrice * Config.frontend.tax;
  const totalPrice = subtotalPrice + totalTax;
  return {
    subtotalPrice,
    totalTax,
    totalPrice,
  };
}
