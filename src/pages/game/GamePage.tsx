import React from "react";
import { useSelector } from "react-redux";
import Board from "../../components/board/Board";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";
import type { RootState } from "../../store/store";
import Buttons from "./Buttons";

import "./GamePage.scss";

type GamePageProps = {};

const GamePage: React.FunctionComponent<GamePageProps> = () => {
  const roomID = useSelector((state: RootState) => state.room.roomID);

  return (
    <div className="sets-page sets-page--game">
      <div className="side-bar">
        <h4>Room ID : {roomID}</h4>
        <ScoreBoard />

        {/* TODO à déplacer dans un nouveau composant
                Ne pas oublier de bouger le style */}
        <div className="game-button-bar">
          <Buttons />
          {/* <Button size="lg" variant="primary" block>Set !</Button>
        <Button size="sm" variant="secondary" block>Je ne vois rien</Button> */}
        </div>
      </div>

      <div className="main-content">
        <Board />
      </div>
    </div>
  );
};

export default GamePage;
