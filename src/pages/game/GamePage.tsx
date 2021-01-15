import React, { useState } from "react";
import Board from "../../components/board/Board";
import Logo from "../../components/logo/Logo";
import Sidebar from "./sidebar/Sidebar";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

import "./GamePage.scss";

type GamePageProps = {};

const GamePage: React.FunctionComponent<GamePageProps> = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const gameState = useSelector((state: RootState) => state.room.gameState);
  const users = useSelector((state: RootState) => state.room.scoreBoard);
  const hasUserThatAskToDeal = users.filter(e => e.meta.vote).length > 0;
  

  return (
    <div
      className={`sets-page sets-page--game game-state-${gameState} ${hasUserThatAskToDeal ? 'game-ask-deal' : ''}`}
    >
      <div className="side-bar-toogle">
        <button type="button" onClick={() => setmenuOpen(!menuOpen)}>
          {menuOpen ? "CLOSE" : <Logo />}
        </button>
      </div>
      <Sidebar menuOpen={menuOpen} />

      <div className="main-content">
        <Board />
      </div>
    </div>
  );
};

export default GamePage;
