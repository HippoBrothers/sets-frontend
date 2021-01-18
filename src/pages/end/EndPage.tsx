import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Rules from "../../components/Rules/Rules";
import ScoreBoard from "../../components/scoreBoard/ScoreBoard";

import { startVote } from '../../store/roomActions';
import { getCurrentUser } from "../../store/slices/roomSlice";

import "./endPage.scss";

type EndPageProps = {

};

const EndPage: React.FunctionComponent<EndPageProps> = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(getCurrentUser);
  
  return (
    <div className="sets-page sets-page--end sets-page-common">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content">

        <div className="winner">
          <h1>GAME OVER</h1>
          {/* <h3>WINNER : </h3> */}
        </div>

        <ScoreBoard />
        <Button
          size="lg"
          block
          variant={myProfile?.meta.vote ? "danger" : "warning"}
          onClick={() => dispatch(startVote())}
        >
          Play again
        </Button>

        <hr />

        <Rules />
      </div>
    </div>
  );
};

export default EndPage;
