import api from '../../api';
import { AppThunk } from '../index';
import configSlice from './config-slice';

export const fetchConfig = (): AppThunk => async (dispatch) => {
  const {
    configRequested,
    configRequestFailed,
    configRequestSucceeded,
  } = configSlice.actions;
  
  dispatch(configRequested());
  
  try {
    const config = await api.configs.getConfigSettings();
    
    if (config.error) {
      throw new Error(config.error);
    }

    dispatch(configRequestSucceeded(config));
  } catch (e) {
    dispatch(configRequestFailed(e.message));
  }
};