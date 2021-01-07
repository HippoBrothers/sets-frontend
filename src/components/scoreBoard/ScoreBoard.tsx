import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import UserScore from '../userScore/UserScore';
import './scoreBoard.scss';

type ScoreBoardProps = {

};

const ScoreBoard: React.FunctionComponent<ScoreBoardProps> = () => {
  const roomID = useSelector((state: RootState) => state.room.roomID);
  const cardsLeftInDeck = useSelector((state: RootState) => state.game.leftInDeck);
  const users = useSelector((state: RootState) => state.room.scoreBoard);
  return (
    <div className="score-board">
      <h1>Scores</h1>
      <h4>
        {cardsLeftInDeck}
      </h4>
      <h4>
        Room ID :
        {' '}
        {roomID}
      </h4>
      {
        users.map((e) => <UserScore key={e.key} user={e} />)
      }
    </div>
  );
};

export default ScoreBoard;
