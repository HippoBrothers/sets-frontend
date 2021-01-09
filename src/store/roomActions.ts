/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import {sendCreateRoom, sendJoinRoom, sendStartVote} from '../events/websocket';
import { getRoomBaseState } from './slices/roomSlice';
import type { RootState } from './store';

export const startVote = createAsyncThunk('start-vote', (param, thunkAPI) => {
  const { secret, playerID } = getRoomBaseState(thunkAPI.getState() as RootState);
  if (playerID && secret) {
    sendStartVote(playerID, secret);
  }
});

export const createRoom = createAsyncThunk<void, string>('createRoom', (param) => {
  sendCreateRoom(param);
});

export const joinRoom = createAsyncThunk<void, any>('joinRoom', (param: any) => {
  sendJoinRoom(param);
});
