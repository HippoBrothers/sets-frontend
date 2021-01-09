import React, { useCallback, useState } from "react";
import { Button, FormControl, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createRoom, joinRoom } from "../../store/roomActions";
import Logo from "../../components/logo/Logo";

import "./homePage.scss";

type HomePageProps = {};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [roomID, setRoomID] = useState("");

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

  return (
    <div className="sets-page sets-page--home">
      <Logo />
      <div className="join-forms">
        <div className="join-room">
          <div className="inputs">
            <FormControl
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormControl
              placeholder="Game ID"
              value={roomID}
              onChange={(e) => {
                setRoomID(e.target.value);
              }}
            />
          </div>
          <Button
            onClick={joinRoomCb}
            disabled={username.length < 2 || roomID.length < 9}
          >
            Join Room
          </Button>
        </div>

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
      </div>
    </div>
  );
};

export default HomePage;
