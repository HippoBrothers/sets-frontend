import { combineReducers, createStore } from '@reduxjs/toolkit';
import reducers from './rootReducer';

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
