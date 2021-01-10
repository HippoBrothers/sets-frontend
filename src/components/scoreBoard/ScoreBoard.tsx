import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UserScore from '../userScore/UserScore';
import './scoreBoard.scss';

type ScoreBoardProps = {

};

const ScoreBoard: React.FunctionComponent<ScoreBoardProps> = () => {
  const cardsLeftInDeck = useSelector((state: RootState) => state.game.leftInDeck);
  const timeLeft = useSelector((state: RootState) => state.game.buzzingTimeLeft);
  const gameState = useSelector((state: RootState) => state.room.gameState);
  const users = useSelector((state: RootState) => state.room.scoreBoard);

  return (
    <div className="score-board">
      
      { gameState === 'playing' && (
      <h4>
        Cartes restantes :
          {cardsLeftInDeck}
      </h4>
      )}
      {
        gameState === 'buzzed' && (
        <h4>
          Reste :
          {' '}
          {timeLeft ? timeLeft / 1000 : 'Je sais pas'}
        </h4>
        )
      }
      {
        users.map((e) => <UserScore key={e.key} user={e} /> )
      }
    </div>
  );
};

export default ScoreBoard;
