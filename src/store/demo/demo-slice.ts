import { createSlice } from '@reduxjs/toolkit';

const demoSlice = createSlice({
  name: 'demo',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export default demoSlice;
