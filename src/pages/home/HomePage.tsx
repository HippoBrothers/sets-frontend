import React, { useCallback, useEffect, useState } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom, joinRoom } from "../../store/roomActions";
import Logo from "../../components/logo/Logo";

import "./homePage.scss";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";

type HomePageProps = {};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dispatch = useDispatch();

  const routeParams = useParams<{ roomID?: string }>();
  const hasRoomInUrl = !!routeParams.roomID

  // Automaticaly join the last rooom
  const storePlayerName = useSelector(
    (state: RootState) => state.room.playerName
  );
  useEffect(() => {
    if (hasRoomInUrl && storePlayerName) {
      dispatch(
        joinRoom({ username: storePlayerName, roomID: routeParams.roomID })
      );
    }
  }, [dispatch, storePlayerName, hasRoomInUrl, routeParams.roomID]);

  // Maange store of the page

  const [username, setUsername] = useState("");
  const [roomID, setRoomID] = useState(routeParams?.roomID || "");

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
        {!hasRoomInUrl && (
          <>
            <hr />

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
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
