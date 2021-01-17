import React, { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { joinRoom } from "../../store/roomActions";
import { RootState } from "../../store/store";
import Clipboard from "clipboard";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type JoinRoomProps = {};

const JoinRoom: React.FunctionComponent<JoinRoomProps> = () => {
  const dispatch = useDispatch();

  const routeMatch = useRouteMatch<{ roomID?: string }>();
  const hasRoomInUrl = !!routeMatch.params.roomID;

  const storePlayerName = useSelector(
    (state: RootState) => state.room.playerName
  );

  const [username, setUsername] = useState(storePlayerName || "");
  const [roomID, setRoomID] = useState(routeMatch.params?.roomID || "");

  const joinRoomCb = useCallback(() => {
    if (username.length > 2 && roomID.length > 8) {
      dispatch(joinRoom({ username: username, roomID: roomID }));
    }
  }, [dispatch, username, roomID]);

  useEffect(() => {
    new Clipboard(".room-id");
  }, []);

  return (
    <div className="join-room">
      <Button
        variant="dark"
        className="room-id"
        block
        data-clipboard-text={window.location.href}
      >
        <FontAwesomeIcon icon={faLink} className="icon" />
        {roomID}
      </Button>
      <div className="inputs">
        <FormControl
          placeholder="Username"
          name="player-name"
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
        variant="warning"
        size="lg"
        disabled={username.length < 3 || roomID.length < 9}
      >
        Join Room
      </Button>
    </div>
  );
};

export default JoinRoom;
