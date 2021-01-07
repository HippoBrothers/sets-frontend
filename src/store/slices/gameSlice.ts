/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import type SetsCard from '../../types/SetsCard';

export interface UpdateGamePayload {
  board: Array<SetsCard>;
  cardsLeft: number;
}

interface GameSlice {
  cardsOnBoard: Array<any>,
  leftInDeck: number,
  selectedCards: Array<any>,
  buzzingPlayer?: string;
  buzzingTimeLeft?: number;
}

const initialState: GameSlice = {
  cardsOnBoard: [],
  leftInDeck: 81,
  selectedCards: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateGame(state: GameSlice, action: PayloadAction<UpdateGamePayload>) {
      state.cardsOnBoard = action.payload.board;
      state.leftInDeck = action.payload.cardsLeft;
    },
    selectCard(state: GameSlice, action: PayloadAction<number>) {
      if (state.selectedCards.length < 3) {
        state.selectedCards.push(action.payload);
      }
    },
    endSelection(state: GameSlice) {
      state.selectedCards = [];
      state.buzzingPlayer = undefined;
    },
    clearBoard(state:GameSlice) {
      state.cardsOnBoard = [];
      state.selectedCards = [];
      state.leftInDeck = 81;
    },
    playerBuzz(state: GameSlice, action: PayloadAction<{playerID?: string, time: number}>) {
      state.buzzingPlayer = action.payload.playerID;
      if (!action.payload.playerID) {
        state.buzzingTimeLeft = undefined;
      } else {
        state.buzzingTimeLeft = action.payload.time;
      }
    },
  },
});

export const {
  updateGame, endSelection, selectCard, clearBoard, playerBuzz,
} = gameSlice.actions;

export const getGameBaseState = (state: RootState): GameSlice => state.game;

export default gameSlice.reducer;
