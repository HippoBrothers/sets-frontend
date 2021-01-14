import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendBuzz, sendCardSelected, sendValidation, sendVoteAddCards } from '../events/websocket';
import { getGameBaseState } from './slices/gameSlice';
import { getRoomBaseState } from './slices/roomSlice';
import type { RootState } from './store';

export const buzz = createAsyncThunk('buzz', (param, thunkAPI) => {
  const { secret, playerID } = getRoomBaseState(thunkAPI.getState() as RootState);
  if (playerID && secret) {
    sendBuzz(playerID, secret);
  }
});

export const validateCards = createAsyncThunk('validateCards', (param, thunkAPI) => {
  const { selectedCards } = getGameBaseState(thunkAPI.getState() as RootState);
  const { gameState } = getRoomBaseState(thunkAPI.getState() as RootState);
  if (selectedCards && gameState === 'buzzed') {
    sendValidation(selectedCards);
  }
});

export const selectCard = createAsyncThunk<void, number>('selectCard', (param, thunkAPI) => {
  const { gameState } = getRoomBaseState(thunkAPI.getState() as RootState);
  if (gameState === 'buzzed') {
    sendCardSelected(param);
  }
});

export const voteAddCards = createAsyncThunk('voteAddCards', () => {
  sendVoteAddCards();
});
