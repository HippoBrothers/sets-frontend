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
      state.selectedCards.push(action.payload);
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
    playerBuzz(state: GameSlice, action: PayloadAction<string | undefined>) {
      state.buzzingPlayer = action.payload;
    },
  },
});

export const {
  updateGame, endSelection, selectCard, clearBoard, playerBuzz,
} = gameSlice.actions;

export const getGameBaseState = (state: RootState): GameSlice => state.game;

export default gameSlice.reducer;
