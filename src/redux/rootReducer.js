import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const rootReducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
