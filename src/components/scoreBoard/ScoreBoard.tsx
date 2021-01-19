import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserScore from "../userScore/UserScore";
import "./scoreBoard.scss";
import { useTranslation } from "react-i18next";


type ScoreBoardProps = {};

const ScoreBoard: React.FunctionComponent<ScoreBoardProps> = () => {
  const users = useSelector((state: RootState) => state.room.scoreBoard);
  const sortedUsers = users.slice().sort((a, b) => a.score - b.score);
  const { t } = useTranslation();
  return (
    <div className="score-board">
      <h4>{t("score_board_header")}</h4>
      <div className="users-list">
        {sortedUsers.map((e) => (
          <UserScore key={e.key} user={e} />
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
