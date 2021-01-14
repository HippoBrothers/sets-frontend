import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Clipboard from "clipboard";
import { useSelector } from "react-redux";
import Board from "../../components/board/Board";
import Logo from "../../components/logo/Logo";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";
import type { RootState } from "../../store/store";
import Buttons from "./Buttons";
import CardsLeft from "../../components/cardsLeft/CardsLeft";

import "./GamePage.scss";

type GamePageProps = {};

const GamePage: React.FunctionComponent<GamePageProps> = () => {
  const roomID = useSelector((state: RootState) => state.room.roomID);
  const gameState = useSelector((state: RootState) => state.room.gameState);

  const timeLeft = useSelector(
    (state: RootState) => state.game.buzzingTimeLeft
  );

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);

  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="sets-page sets-page--game">
      <div className="side-bar-toogle">
        <button type="button" onClick={() => setmenuOpen(!menuOpen)}>
          {menuOpen ? 'CLOSE' : <Logo/>}
        </button>
      </div>
      <div className={`side-bar ${menuOpen ? 'open' : ''}`}>
        <Logo />
        <div className="row-infos">
          <Button
            variant="dark"
            className="room-id"
            data-clipboard-text={window.location.href}
          >
            Room : {roomID}
          </Button>
        </div>

        {gameState === "buzzed" && (
          <h4>Reste : {timeLeft ? timeLeft / 1000 : "Je sais pas"}</h4>
        )}
        <ScoreBoard />

        <div className="dark-bg">
          <CardsLeft />
        </div>

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
