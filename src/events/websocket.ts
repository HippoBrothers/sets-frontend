import { Store } from '@reduxjs/toolkit';

import { io, Socket } from 'socket.io-client';
import {
  clearBoard, endSelection, playerBuzz, updateGame, UpdateGamePayload,
} from '../store/slices/gameSlice';
import {
  gameOver,
  joinRoom, playerBuzzed, playerConnect, PlayerConnectPayload, playGame, updateScoreBoard,
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

const createSocketClient = (store: Store) => {
  // Connect to the client
  socket = io('http://192.168.1.28:4000');
  // Créer une room
  socket.on('stateChanged', (data: any) => {
    const currentState = (store.getState() as RootState).room.gameState;
    console.log(data);

    if (data.type === 'waiting') {
      store.dispatch(joinRoom());
    } else if (data.type === 'playing') {
      store.dispatch(playGame());
      store.dispatch(updateGame(data as UpdateGamePayload));
      // Reset selected cards
      store.dispatch(updateScoreBoard(data.scoreboard));
      if (currentState === 'buzzed') {
        store.dispatch(endSelection());
      }
    } else if (data.type === 'buzzed') {
      // TODO mettre à jour le user qui a buzze
      store.dispatch(playerBuzzed(data.payload.playerID));
      store.dispatch(playerBuzz(data.payload.playerID));
    } else if (data.type === 'end') {
      store.dispatch(clearBoard());
      store.dispatch(gameOver());
    }
  });

  socket.on('welcome', (data: PlayerConnectPayload) => {
    console.log(data);
    store.dispatch(playerConnect(data));
  });
  // create a room
  socket.emit('create', {});
};

export default createSocketClient;
