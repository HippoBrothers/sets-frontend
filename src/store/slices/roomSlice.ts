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
}

const initialState: RoomSlice = {
  gameState: undefined,
  scoreBoard: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setGameState(state: RoomSlice, action: PayloadAction<GameState>) {
      state.gameState = action.payload;
    },
    playerConnected(state: RoomSlice, action: PayloadAction<PlayerConnectPayload>) {
      state.roomID = action.payload.roomID;
      state.playerID = action.payload.playerID;
      state.playerName = action.payload.name;
      state.secret = action.payload.secret;
    },
    updateScoreBoard(state: RoomSlice, action: PayloadAction<Array<Score>>) {
      state.scoreBoard = action.payload;
    },
  },
});

export const {
  playerConnected, updateScoreBoard, setGameState,
} = roomSlice.actions;

export const getRoomBaseState = (state: RootState): RoomSlice => state.room;

export default roomSlice.reducer;
