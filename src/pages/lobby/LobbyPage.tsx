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
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";

type LobbyPageProps = {};

const LobbyPage: React.FunctionComponent<LobbyPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);

  const { t } = useTranslation();

  return (
    <div className="sets-page sets-page--lobby sets-page-common">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content">
        <div className="lobby-text">
          <h3>{t('lobby_header')}</h3>
          <p>
            {t('lobby_text')}
          </p>
        </div>

        <ShareRoom />
        <ScoreBoard />
        <Button
          size="lg"
          block
          variant={myProfile?.meta.vote ? "danger" : "warning"}
          onClick={() => dispatch(startVote())}
        >
          {t("button_ready")}
        </Button>

        <hr />

        <Rules />
      </div>
      <Footer />
    </div>
  );
};

export default LobbyPage;
