import React from 'react';
import Score from '../../types/Score';

import './userScore.scss';

type UserScoreProps = {
  user: Score;
};

const UserScore: React.FunctionComponent<UserScoreProps> = ({ user }) => (
  <div className="user-score-container">
    <div className="user-image">{user.name.substring(0, 1).toLocaleUpperCase()}</div>
    <span className="user-username">{user.name}</span>
    <span className="user-score">{user.score}</span>
  </div>
);

export default UserScore;
