import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

import "./timeLeft.scss";

type TimeLeftProps = {};

const TimeLeft: React.FunctionComponent<TimeLeftProps> = () => {
  const gameState = useSelector((state: RootState) => state.room.gameState);

  const timeLeft = useSelector(
    (state: RootState) => state.game.buzzingTimeLeft
  );

  return gameState === "buzzed" ? (
    <div className="time-left">
      <FontAwesomeIcon icon={faStopwatch} className="icon" />
      <span className="time-left-text">
        {timeLeft ? timeLeft / 1000 : "-1"}
      </span>
    </div>
  ) : null;
};

export default TimeLeft;
