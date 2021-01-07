/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendStartVote } from '../events/websocket';
import { getRoomBaseState } from './slices/roomSlice';
import type { RootState } from './store';

export const startVote = createAsyncThunk('start-vote', (param, thunkAPI) => {
  const { secret, playerID } = getRoomBaseState(thunkAPI.getState() as RootState);
  if (playerID && secret) {
    sendStartVote(playerID, secret);
  }
});
