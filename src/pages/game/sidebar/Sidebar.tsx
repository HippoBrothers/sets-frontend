import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Clipboard from "clipboard";
import { useSelector } from "react-redux";
import Logo from "../../../components/logo/Logo";
import ScoreBoard from "../../../components/scoreBoard/ScoreBoard";
import type { RootState } from "../../../store/store";
import Buttons from "../Buttons/Buttons";
import CardsLeft from "../../../components/cardsLeft/CardsLeft";
import TimeLeft from "../../../components/timeLeft/TimeLeft";

import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  menuOpen: boolean;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ menuOpen }) => {
  const roomID = useSelector((state: RootState) => state.room.roomID);

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);
  return (
    <div className={`side-bar ${menuOpen ? "open" : ""}`}>
      <Logo />
      <div className="row-infos">
        <Button
          variant="dark"
          className="room-id"
          data-clipboard-text={window.location.href}
        >
          <FontAwesomeIcon icon={faLink} className="icon" />
          {roomID}
        </Button>
      </div>

      <ScoreBoard />

      <div className="game-infos">
        <CardsLeft />
        <TimeLeft />
      </div>

      <Buttons />
    </div>
  );
};

export default Sidebar;
