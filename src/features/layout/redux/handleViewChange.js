import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  LAYOUT_HANDLE_VIEW_CHANGE,
} from './constants';

export function handleViewChange(args = {}) {
  console.log(args);
  return {
    type: LAYOUT_HANDLE_VIEW_CHANGE,
    data: args,
  };
}

export function useHandleViewChange() {
  const dispatch = useDispatch();
  const viewDeck = useSelector((state) => state.layout.viewDeck);
  const boundAction = useCallback((...params) => dispatch(handleViewChange(...params)), [dispatch]);
  return {viewDeck, handleViewChange: boundAction};
}

export function reducer(state, action) {
  switch (action.type) {
    case LAYOUT_HANDLE_VIEW_CHANGE:
      return {
        ...state,
        viewDeck: action.data,
      };

    default:
      return state;
  }
}
