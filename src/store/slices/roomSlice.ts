/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { createSelector, createSlice, DeepPartial, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type Score from '../../types/Score';
import { storeHydrated } from '../storePersister';

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
  extraReducers: builder => {
    builder.addCase(storeHydrated, (state, action: PayloadAction<DeepPartial<RootState>>) => {
      state.roomID = action.payload.room?.roomID;
      state.playerID = action.payload.room?.playerID;
      state.secret = action.payload.room?.secret;
      state.playerName = action.payload.room?.playerName;
    })
  }
});

export const {
  playerConnected, updateScoreBoard, setGameState,
} = roomSlice.actions;

export const getRoomBaseState = (state: RootState): RoomSlice => state.room;

export const getCurrentUser =  createSelector(
  (state: RootState) => state.room.scoreBoard,
  (state: RootState) => state.room.playerID,
  (scoreBoard, playerID)=> scoreBoard.find((user) => user.key === playerID),
)


export default roomSlice.reducer;
