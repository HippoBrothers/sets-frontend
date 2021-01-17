import React from "react";
import Logo from "../../../components/logo/Logo";
import ScoreBoard from "../../../components/scoreBoard/ScoreBoard";
import Buttons from "../Buttons/Buttons";
import CardsLeft from "../../../components/cardsLeft/CardsLeft";
import TimeLeft from "../../../components/timeLeft/TimeLeft";
import ShareRoom from "../../../components/shareRoom/ShareRoom";

import "./sidebar.scss";

type SidebarProps = {
  menuOpen: boolean;
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ menuOpen }) => {

  return (
    <div className={`side-bar ${menuOpen ? "open" : ""}`}>
      <Logo />
      <div className="row-infos">
        <ShareRoom />
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
