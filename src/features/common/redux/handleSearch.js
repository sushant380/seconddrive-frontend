import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import Config from '../../../Config.json';
import {
  COMMON_HANDLE_SEARCH_BEGIN,
  COMMON_HANDLE_SEARCH_SUCCESS,
  COMMON_HANDLE_SEARCH_FAILURE,
  COMMON_HANDLE_SEARCH_DISMISS_ERROR,
  API_BASE_URL
} from './constants';


export function handleSearch(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: COMMON_HANDLE_SEARCH_BEGIN,
    });
    const url=args && typeof args!=='string' &&
    args.sq!==''?`${API_BASE_URL}/cars`:
    `${API_BASE_URL}/cars/search?q=${args}`;
    const promise = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic '+btoa(Config.backend.credentials),
        },
      }).then((response) => response.json())
          .then((data)=>{
            dispatch({
              type: COMMON_HANDLE_SEARCH_SUCCESS,
              data: data,
            });
            resolve(data);
          }).catch((err)=>{
            dispatch({
              type: COMMON_HANDLE_SEARCH_FAILURE,
              data: {error: err},
            });
            reject(err);
          });
    });

    return promise;
  };
}

export function dismissHandleSearchError() {
  return {
    type: COMMON_HANDLE_SEARCH_DISMISS_ERROR,
  };
}

export function useHandleSearch(params) {
  const dispatch = useDispatch();

  const {initialLoad, searchList, handleSearchPending, handleSearchError} = useSelector(
      (state) => ({
        initialLoad: state.common.initialLoad,
        searchList: state.common.searchList,
        handleSearchPending: state.common.handleSearchPending,
        handleSearchError: state.common.handleSearchError,
      }),
      shallowEqual,
  );

  const boundAction = useCallback((...args) => {
    return dispatch(handleSearch(...args));
  }, [dispatch]);

  useEffect(() => {
    if (params) boundAction(...(params || []));
  }, [...(params || []), boundAction]); // eslint-disable-line

  const boundDismissError = useCallback(() => {
    return dispatch(dismissHandleSearchError());
  }, [dispatch]);

  return {
    searchList,
    initialLoad,
    handleSearch: boundAction,
    handleSearchPending,
    handleSearchError,
    dismissHandleSearchError: boundDismissError,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_HANDLE_SEARCH_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        initialLoad: false,
        handleSearchPending: true,
        handleSearchError: null,
      };

    case COMMON_HANDLE_SEARCH_SUCCESS:
      // The request is success
      return {
        ...state,
        initialLoad: false,
        searchList: action.data,
        handleSearchPending: false,
        handleSearchError: null,
      };

    case COMMON_HANDLE_SEARCH_FAILURE:
      // The request is failed
      return {
        ...state,
        initialLoad: false,
        handleSearchPending: false,
        handleSearchError: action.data.error,
      };

    case COMMON_HANDLE_SEARCH_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        initialLoad: false,
        handleSearchError: null,
      };

    default:
      return state;
  }
}
