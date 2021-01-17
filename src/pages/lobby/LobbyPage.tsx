import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";
import Rules from "../../components/Rules/Rules";
import Clipboard from "clipboard";

import { startVote } from "../../store/roomActions";
import { getCurrentUser } from "../../store/slices/roomSlice";

import "./lobbyPage.scss";
import ShareRoom from "../../components/shareRoom/ShareRoom";

type LobbyPageProps = {};

const LobbyPage: React.FunctionComponent<LobbyPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);

  return (
    <div className="sets-page sets-page--lobby sets-page-common">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content">
        <ShareRoom />
        <ScoreBoard />
        <Button
          size="lg"
          block
          variant={myProfile?.meta.vote ? "danger" : "warning"}
          onClick={() => dispatch(startVote())}
        >
          Ready
        </Button>

        <hr />

        <Rules />
      </div>
    </div>
  );
};

export default LobbyPage;
