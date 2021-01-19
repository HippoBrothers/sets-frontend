import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Logo from "../../components/logo/Logo";
import Rules from "../../components/Rules/Rules";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";

import { startVote } from "../../store/roomActions";
import { getCurrentUser } from "../../store/slices/roomSlice";
import { useTranslation } from "react-i18next";


import "./endPage.scss";

type EndPageProps = {};

const EndPage: React.FunctionComponent<EndPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);
  const { t } = useTranslation();

  return (
    <div className="sets-page sets-page--end sets-page-common">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content">
        <div className="winner">
          <h1>{t("game_over")}</h1>
          {/* <h3>WINNER : </h3> */}
        </div>

        <ScoreBoard />
        <Button
          size="lg"
          block
          variant={myProfile?.meta.vote ? "danger" : "warning"}
          onClick={() => dispatch(startVote())}
        >
          {t("button_play_again")}
        </Button>

        <hr />

        <Rules />
      </div>
      <Footer />
    </div>
  );
};

export default EndPage;
