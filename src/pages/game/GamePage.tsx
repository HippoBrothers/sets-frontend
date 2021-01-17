import React, { useState } from "react";
import Board from "../../components/board/Board";
import Sidebar from "./sidebar/Sidebar";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

import "./GamePage.scss";
import Buttons from "./Buttons/Buttons";
import MobileTopBar from "./mobileTopBar/MobileTopBar";

type GamePageProps = {};

const GamePage: React.FunctionComponent<GamePageProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const gameState = useSelector((state: RootState) => state.room.gameState);
  const users = useSelector((state: RootState) => state.room.scoreBoard);
  const hasUserThatAskToDeal = users.filter((e) => e.meta.vote).length > 0;

  return (
    <div
      className={`sets-page sets-page--game game-state-${gameState} ${
        hasUserThatAskToDeal ? "game-ask-deal" : ""
      }`}
    >
      <MobileTopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} />

      <div className="main-content">
        <Board />
      </div>
      <div className="mobile-buttons">
        <Buttons />
      </div>
    </div>
  );
};

export default GamePage;
