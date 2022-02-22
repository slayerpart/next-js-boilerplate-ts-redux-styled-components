import { Context, createWrapper } from 'next-redux-wrapper';
import { Action, applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk';

import rootReducer from './root';

const middlewares = [thunk];

const makeStore = (_context: Context) =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const store = makeStore({});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<Store<AppRootState>>(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});
