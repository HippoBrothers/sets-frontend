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
  const gameMode = useSelector((state: RootState) => state.room.gameState);
  const hasBuzzed = user.key === buzzingPlayer;
  return (
    <div className="user-score-container buzzed voted">
      <div className="user-image">
        {user.name.substring(0, 1).toLocaleUpperCase()}
      </div>
      <span className="user-username">{user.name}</span>
      {hasBuzzed && (
        <Badge variant="primary" pill>
          BUZZ
        </Badge>
      )}
      {user.meta.vote && !hasBuzzed && (
        <Badge variant="info" pill className="has-voted">
          {gameMode === "waiting" || gameMode === "end" ? "START" : "DEAL"}
        </Badge>
      )}
      <span className="user-score">{user.score}</span>
    </div>
  );
};

export default UserScore;
