import React from 'react';

import './userScore.scss';

type UserScoreProps = {

};

const UserScore: React.FunctionComponent<UserScoreProps> = () => (
  <div className="user-score-container">
    <div className="user-image" />
    <span className="user-username">Roploplo</span>
    <span className="user-score">0</span>
  </div>
);

export default UserScore;
