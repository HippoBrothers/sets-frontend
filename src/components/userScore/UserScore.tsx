import React from "react";
import Score from "../../types/Score";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./userScore.scss";
import { Badge } from "react-bootstrap";

type UserScoreProps = {
  user: Score;
};

const UserScore: React.FunctionComponent<UserScoreProps> = ({ user }) => {
  const buzzingPlayer = useSelector(
    (state: RootState) => state.game.buzzingPlayer
  );
  return (
    <div className="user-score-container buzzed voted">
      <div className="user-image">
        {user.name.substring(0, 1).toLocaleUpperCase()}
      </div>
      {user.key === buzzingPlayer && (
        <Badge color="secondary">
          <div className="user-image">
            {user.name.substring(0, 1).toLocaleUpperCase()}
          </div>
        </Badge>
      )}
      <span className="user-username">{user.name}</span>
      <span className="user-score">{user.score}</span>
    </div>
  );
};

export default UserScore;
