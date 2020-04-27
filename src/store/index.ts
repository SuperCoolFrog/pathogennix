import { configureStore, Action } from '@reduxjs/toolkit'
import rootReducer, { RootState } from './root-reducer';
import { ThunkAction } from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export type AppDispatch = typeof store.dispatch

export default store;
