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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";

type LobbyPageProps = {};

const LobbyPage: React.FunctionComponent<LobbyPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);
  const roomID = useSelector((state: RootState) => state.room.roomID);

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);

  return (
    <div className="sets-page sets-page--lobby">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content">
        <Button
          variant="dark"
          className="room-id"
          block
          data-clipboard-text={window.location.href}
        >
          <FontAwesomeIcon icon={faLink} className="icon" />
          {roomID}
        </Button>
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
