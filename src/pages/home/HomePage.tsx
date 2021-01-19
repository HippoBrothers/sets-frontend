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
import { Alert } from "react-bootstrap";
import { errorOccured } from "../../store/slices/roomSlice";

type HomePageProps = {};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dispatch = useDispatch();

  const routeMatch = useRouteMatch<{ roomID?: string }>();
  const hasRoomInUrl = !!routeMatch.params.roomID;

  const error = useSelector((state: RootState) => state.room.error);

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
      <div className="main-page-content">
        <div className={"join-forms"}>
          {error && (
            <Alert
              variant="danger"
              onClose={() => dispatch(errorOccured(undefined))}
              dismissible
            >
              An error occured
            </Alert>
          )}

          {hasRoomInUrl ? <JoinRoom /> : <CreateRoom />}
        </div>
        <hr />
        <Rules />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
