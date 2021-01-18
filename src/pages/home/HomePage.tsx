import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { joinRoom } from "../../store/roomActions";
import Logo from "../../components/logo/Logo";

import { Link, useRouteMatch } from "react-router-dom";
import { RootState } from "../../store/store";

import JoinRoom from "./JoinRoom";
import CreateRoom from "./CreateRoom";
import Rules from "../../components/Rules/Rules";
import Footer from "../../components/footer/Footer";

import "./homePage.scss";

type HomePageProps = {};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dispatch = useDispatch();

  const routeMatch = useRouteMatch<{ roomID?: string }>();
  const hasRoomInUrl = !!routeMatch.params.roomID;

  // Automaticaly join the last rooom
  const storePlayerName = useSelector(
    (state: RootState) => state.room.playerName
  );
  useEffect(() => {
    if (hasRoomInUrl && storePlayerName) {
      dispatch(
        joinRoom({
          username: storePlayerName,
          roomID: routeMatch.params.roomID,
        })
      );
    }
  }, [dispatch, storePlayerName, hasRoomInUrl, routeMatch.params.roomID]);

  return (
    <div className="sets-page sets-page--home sets-page-common">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="main-page-content join-forms">
        {hasRoomInUrl ? <JoinRoom /> : <CreateRoom />}
        <hr />
        <Rules />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
