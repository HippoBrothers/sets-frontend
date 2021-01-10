import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import GamePage from './game/GamePage';
import LobbyPage from './lobby/LobbyPage';
import EndPage from './end/EndPage';
import { Redirect } from 'react-router-dom';

type GameRouterProps = {};

const GameRouter: React.FunctionComponent<GameRouterProps> = () => {
    const gameState = useSelector((state: RootState) => state.room.gameState);
    if (gameState === 'waiting') {
        return <LobbyPage/>;
    }
    if (gameState === 'playing' || gameState === 'buzzed') {
        return <GamePage/>;
    }
    if (gameState === 'end') {
        return <EndPage/>;
    }
    return <Redirect to='/' />;
};

export default GameRouter;
