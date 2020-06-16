import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  COMMON_HANDLE_SEARCH_BEGIN,
  COMMON_HANDLE_SEARCH_SUCCESS,
  COMMON_HANDLE_SEARCH_FAILURE,
  COMMON_HANDLE_SEARCH_DISMISS_ERROR,
} from '../../../../src/features/common/redux/constants';

import {
  handleSearch,
  dismissHandleSearchError,
  reducer,
} from '../../../../src/features/common/redux/handleSearch';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('common/redux/handleSearch', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when handleSearch succeeds', () => {
    const store = mockStore({});

    return store.dispatch(handleSearch())
        .then(() => {
          const actions = store.getActions();
          expect(actions[0]).toHaveProperty('type', COMMON_HANDLE_SEARCH_BEGIN);
          expect(actions[1]).toHaveProperty('type', COMMON_HANDLE_SEARCH_SUCCESS);
        });
  });

  it('dispatches failure action when handleSearch fails', () => {
    const store = mockStore({});

    return store.dispatch(handleSearch({error: true}))
        .catch(() => {
          const actions = store.getActions();
          expect(actions[0]).toHaveProperty('type', COMMON_HANDLE_SEARCH_BEGIN);
          expect(actions[1]).toHaveProperty('type', COMMON_HANDLE_SEARCH_FAILURE);
          expect(actions[1]).toHaveProperty('data.error', expect.anything());
        });
  });

  it('returns correct action by dismissHandleSearchError', () => {
    const expectedAction = {
      type: COMMON_HANDLE_SEARCH_DISMISS_ERROR,
    };
    expect(dismissHandleSearchError()).toEqual(expectedAction);
  });

  it('handles action type COMMON_HANDLE_SEARCH_BEGIN correctly', () => {
    const prevState = {handleSearchPending: false};
    const state = reducer(
        prevState,
        {type: COMMON_HANDLE_SEARCH_BEGIN},
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSearchPending).toBe(true);
  });

  it('handles action type COMMON_HANDLE_SEARCH_SUCCESS correctly', () => {
    const prevState = {handleSearchPending: true};
    const state = reducer(
        prevState,
        {type: COMMON_HANDLE_SEARCH_SUCCESS, data: {}},
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSearchPending).toBe(false);
  });

  it('handles action type COMMON_HANDLE_SEARCH_FAILURE correctly', () => {
    const prevState = {handleSearchPending: true};
    const state = reducer(
        prevState,
        {type: COMMON_HANDLE_SEARCH_FAILURE, data: {error: new Error('some error')}},
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSearchPending).toBe(false);
    expect(state.handleSearchError).toEqual(expect.anything());
  });

  it('handles action type COMMON_HANDLE_SEARCH_DISMISS_ERROR correctly', () => {
    const prevState = {handleSearchError: new Error('some error')};
    const state = reducer(
        prevState,
        {type: COMMON_HANDLE_SEARCH_DISMISS_ERROR},
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.handleSearchError).toBe(null);
  });
});

