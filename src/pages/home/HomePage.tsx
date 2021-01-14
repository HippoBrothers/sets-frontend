import React, { useCallback, useEffect, useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, joinRoom } from "../../store/roomActions";
import Logo from "../../components/logo/Logo";

import "./homePage.scss";
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { RootState } from "../../store/store";

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

  // Maange store of the page

  const [username, setUsername] = useState("");
  const [roomID, setRoomID] = useState(routeMatch.params?.roomID || "");

  const createRoomCb = useCallback(() => {
    if (username.length > 2) {
      dispatch(createRoom(username));
    }
  }, [dispatch, username]);

  const joinRoomCb = useCallback(() => {
    if (username.length > 2 && roomID.length > 8) {
      dispatch(joinRoom({ username: username, roomID: roomID }));
    }
  }, [dispatch, username, roomID]);

  //   TODO valider en appuyant sur entrer
  return (
    <div className="sets-page sets-page--home">
      <Logo />
      <div className="main-page-content join-forms">
        <div className="join-room">
          {hasRoomInUrl && (
            <>
              <h2>Joining room : {roomID}</h2>
            </>
          )}
          <div className="inputs">
            <FormControl
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {!hasRoomInUrl && (
              <FormControl
                placeholder="Game ID"
                value={roomID}
                onChange={(e) => {
                  setRoomID(e.target.value);
                }}
              />
            )}
          </div>
          <Button
            onClick={joinRoomCb}
            disabled={username.length < 2 || roomID.length < 9}
          >
            Join Room
          </Button>
        </div>
        <hr />

        {hasRoomInUrl ? (
          <Link to={'/'}>
            <Button>Create your own room</Button>
          </Link>
        ) : (
          <div className="new-room">
            <div className="inputs">
              <FormControl
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <Button onClick={createRoomCb} disabled={username.length < 2}>
              Create Room
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
