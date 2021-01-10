import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/logo/Logo";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";

import { startVote } from "../../store/roomActions";
import { getCurrentUser } from "../../store/slices/roomSlice";

import "./lobbyPage.scss";

type LobbyPageProps = {};

const LobbyPage: React.FunctionComponent<LobbyPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);
  return (
    <div className="sets-page sets-page--lobby">
      <Logo />
      <div className="main-page-content">
        <h3>Joueurs</h3>
        <ScoreBoard />
        <Button
          size="lg"
          block
          variant={myProfile?.meta.vote ? "danger" : "warning"}
          onClick={() => dispatch(startVote())}
        >
          Ready
        </Button>
      </div>
    </div>
  );
};

export default LobbyPage;
