import { Store } from "@reduxjs/toolkit";

import { io, Socket } from "socket.io-client";
import appHistory from "../history";
import {
  clearBoard,
  endSelection,
  playerBuzz,
  updateGame,
  UpdateGamePayload,
} from "../store/slices/gameSlice";
import {
  errorOccured,
  playerConnected,
  PlayerConnectPayload,
  setGameState,
  updateScoreBoard,
} from "../store/slices/roomSlice";
import type { RootState } from "../store/store";

let socket: Socket;

export const sendStartVote = (playerID: string, secret: string) => {
  if (socket) {
    console.log("VOTE START EMMITED");
    socket.emit("voteStart", {
      playerID,
      secret,
    });
  }
};

export const sendBuzz = (playerID: string, secret: string) => {
  if (socket) {
    socket.emit("buzz", {
      playerID,
      secret,
    });
  }
};

export const sendValidation = (cards: Array<number>) => {
  if (socket) {
    socket.emit("validation", cards);
  }
};

export const sendCardSelected = (card: number) => {
  if (socket) {
    socket.emit("select", card);
  }
};

export const sendVoteAddCards = () => {
  if (socket) {
    console.log("Ask for more cards");
    socket.emit("voteAddCards", {});
  }
};

export const sendCreateRoom = (userName: string) => {
  if (socket) {
    socket.emit("create", { name: userName });
  }
};

export type JoinRoomParams = {
  username: string;
  roomID: string;
  secret?: string;
  userID?: string;
};
export const sendJoinRoom = (param: JoinRoomParams) => {
  if (socket) {
    socket.emit("join", {
      name: param.username,
      roomID: param.roomID,
      secret: param.secret,
      userID: param.userID,
    });
  }
};

const createSocketClient = (store: Store) => {
  // Connect to the client
  socket = io(process.env.REACT_APP_BACKEND_URL || "localhost:4000");
  // Créer une room
  socket.on("stateChanged", (data: any) => {
    const currentState = (store.getState() as RootState).room.gameState;
    console.log(data);

    if (data.type === "waiting") {
      store.dispatch(setGameState(data.type));
      store.dispatch(updateScoreBoard(data.scoreboard));
    } else if (data.type === "playing") {
      store.dispatch(setGameState(data.type));
      store.dispatch(updateGame(data as UpdateGamePayload));
      // Reset selected cards
      store.dispatch(updateScoreBoard(data.scoreboard));
      if (currentState === "buzzed") {
        store.dispatch(endSelection());
      }
    } else if (data.type === "buzzed") {
      store.dispatch(setGameState(data.type));
      store.dispatch(updateGame(data as UpdateGamePayload));
      store.dispatch(playerBuzz(data.payload));
    } else if (data.type === "end") {
      store.dispatch(clearBoard());
      store.dispatch(setGameState(data.type));
    }
  });

  socket.on("welcome", (data: PlayerConnectPayload) => {
    console.log(data);
    store.dispatch(playerConnected(data));
    appHistory.push(`/${data.roomID}`);
  });

  let timeout: NodeJS.Timeout | null;
  socket.on("err", (data: any) => {
    store.dispatch(errorOccured(data));
    appHistory.push(`/`);

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      store.dispatch(errorOccured(undefined));
    }, 5000);
  });
};

export default createSocketClient;
