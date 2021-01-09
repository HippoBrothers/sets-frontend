import React from 'react';
import Score from '../../types/Score';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import Badge from '@material-ui/core/Badge';

import './userScore.scss';

type UserScoreProps = {
  user: Score;
};

const UserScore: React.FunctionComponent<UserScoreProps> = ({ user }) => {

const buzzingPlayer = useSelector((state: RootState) => state.game.buzzingPlayer);
return (
  // <div className="user-score-main-container">
  //   { user.key === buzzingPlayer && (<span className="buzz-badge badge rounded-pill bg-primary">BUZZ</span>)}
  //  <Badge color="primary">
  
    <div className="user-score-container buzzed voted">
      <Badge color="secondary" badgeContent={"buzz"} invisible={user.key !== buzzingPlayer}>  
      <div className="user-image">{user.name.substring(0, 1).toLocaleUpperCase()}</div>
      </Badge>
      <span className="user-username">{user.name}</span>
      <span className="user-score">{user.score}</span>
    </div>
  
  
    
);
}

export default UserScore;
