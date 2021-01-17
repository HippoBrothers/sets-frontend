import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./mobileTobBar.scss";
import CardsLeft from "../../../components/cardsLeft/CardsLeft";
import Logo from "../../../components/logo/Logo";
import TimeLeft from "../../../components/timeLeft/TimeLeft";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type MobileTopBarProps = {
  menuOpen: boolean;
  setMenuOpen: (state: boolean) => void;
};
const MobileTopBar: React.FunctionComponent<MobileTopBarProps> = ({
  setMenuOpen,
  menuOpen,
}) => {
  const gameState = useSelector((state: RootState) => state.room.gameState);

  return (
    <div className="side-bar-toogle">
      {gameState === "buzzed" ? <TimeLeft /> : <CardsLeft />}
      <Logo />
      <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
    </div>
  );
};

export default MobileTopBar;
