import React from 'react';
import UserScore from '../userScore/UserScore';
import './scoreBoard.scss';

type ScoreBoardProps = {

};

const ScoreBoard: React.FunctionComponent<ScoreBoardProps> = () => (
  <div className="score-board">
    <h1>Scores</h1>
    <UserScore />
    <UserScore />
    <UserScore />
    <UserScore />
    <UserScore />
  </div>
);

export default ScoreBoard;
