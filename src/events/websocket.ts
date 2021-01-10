import { Store } from '@reduxjs/toolkit';

import { io, Socket } from 'socket.io-client';
import appHistory from '../history';
import {
  clearBoard, endSelection, playerBuzz, updateGame, UpdateGamePayload,
} from '../store/slices/gameSlice';
import {
  playerConnected, PlayerConnectPayload, setGameState, updateScoreBoard,
} from '../store/slices/roomSlice';
import type { RootState } from '../store/store';

let socket: Socket;

export const sendStartVote = (playerID: string, secret: string) => {
  if (socket) {
    console.log('VOTE START EMMITED');
    socket.emit('voteStart', {
      playerID,
      secret,
    });
  }
};

export const sendBuzz = (playerID: string, secret: string) => {
  if (socket) {
    socket.emit('buzz', {
      playerID,
      secret,
    });
  }
};

export const sendValidation = (cards: Array<number>) => {
  if (socket) {
    socket.emit('validation', cards);
  }
};

export const sendVoteAddCards = () => {
  if (socket) {
    console.log('Ask for more cards');
    socket.emit('voteAddCards', {});
  }
};

export const sendCreateRoom = (userName: string) => {
  if (socket) {
    socket.emit('create', { name: userName });
  }
};

export const sendJoinRoom = (param: any) => {
  if (socket) {
    socket.emit('join', { name: param.username, roomID: param.roomID });
  }
};

const createSocketClient = (store: Store) => {
  // Connect to the client
  socket = io('http://192.168.1.28:4000');
  // Créer une room
  socket.on('stateChanged', (data: any) => {
    const currentState = (store.getState() as RootState).room.gameState;
    console.log(data);

    if (data.type === 'waiting') {
      store.dispatch(setGameState(data.type));
      store.dispatch(updateScoreBoard(data.scoreboard));
    } else if (data.type === 'playing') {
      store.dispatch(setGameState(data.type));
      store.dispatch(updateGame(data as UpdateGamePayload));
      // Reset selected cards
      store.dispatch(updateScoreBoard(data.scoreboard));
      if (currentState === 'buzzed') {
        store.dispatch(endSelection());
      }
    } else if (data.type === 'buzzed') {
      store.dispatch(setGameState(data.type));

      store.dispatch(playerBuzz(data.payload));
    } else if (data.type === 'end') {
      store.dispatch(clearBoard());
      store.dispatch(setGameState(data.type));
    }
  });

  socket.on('welcome', (data: PlayerConnectPayload) => {
    console.log(data);
    store.dispatch(playerConnected(data));
    // eslint-disable-next-line no-restricted-globals
    appHistory.push(`/${data.roomID}`);
  });
};

export default createSocketClient;
