import { RootState } from '../root-reducer';
// import { createSelector } from '@reduxjs/toolkit';

export const configStateSelector = (state: RootState) => state.config;
