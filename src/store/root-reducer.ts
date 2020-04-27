import { combineReducers } from '@reduxjs/toolkit';
import demoSlice from './demo/demo-slice';

const rootReducer = combineReducers({
  demo: demoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
