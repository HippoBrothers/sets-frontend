import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import GamePage from './game/GamePage';
import LobbyPage from './lobby/LobbyPage';
import EndPage from './end/EndPage';

type GameRouterProps = {

};

const GameRouter: React.FunctionComponent<GameRouterProps> = () => {
//   const match = useRouteMatch();
  const gameState = useSelector((state: RootState) => state.room.gameState);
  if (gameState === 'waiting') {
    return <LobbyPage />;
  } if (gameState === 'playing' || gameState === 'buzzed') {
    return <GamePage />;
  } if (gameState === 'end') {
    return <EndPage />;
  }
  return <p>WTF</p>;
};

export default GameRouter;
