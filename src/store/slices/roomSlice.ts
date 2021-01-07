/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type Score from '../../types/Score';

export interface JoinRoomPayload {
  roomID: string;
}

export interface PlayerConnectPayload {
  roomID: string;
  playerID: string;
  name: string;
  secret: string;
}

type GameState = 'waiting' | 'playing' | 'buzzed' | 'end';

interface RoomSlice {
  roomID?: string;
  gameState?: GameState,

  playerID?: string,
  playerName?: string,
  secret?: string,

  scoreBoard: Array<Score>;

  buzzingPlayer?: string;
}

const initialState: RoomSlice = {
  gameState: undefined,
  scoreBoard: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    joinRoom(state: RoomSlice /* action: PayloadAction<JoinRoomPayload> */) {
      // state.roomID = action.payload.roomID;
      state.gameState = 'waiting';
    },
    playerConnect(state: RoomSlice, action: PayloadAction<PlayerConnectPayload>) {
      state.roomID = action.payload.roomID;
      state.playerID = action.payload.playerID;
      state.playerName = action.payload.name;
      state.secret = action.payload.secret;
    },
    playGame(state: RoomSlice) {
      state.gameState = 'playing';
    },
    updateScoreBoard(state: RoomSlice, action: PayloadAction<Array<Score>>) {
      state.scoreBoard = action.payload;
    },
    playerBuzzed(state: RoomSlice, action: PayloadAction<string>) {
      state.gameState = 'buzzed';
      state.buzzingPlayer = action.payload;
    },
    gameOver(state: RoomSlice) {
      state.gameState = 'end';
    },
  },
});

export const {
  joinRoom, playerConnect, updateScoreBoard, playerBuzzed, playGame, gameOver,
} = roomSlice.actions;

export const getRoomBaseState = (state: RootState): RoomSlice => state.room;

export default roomSlice.reducer;
