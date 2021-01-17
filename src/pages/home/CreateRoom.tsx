import React, { useCallback, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../store/roomActions";
import { RootState } from "../../store/store";

type CreateRoomProps = {};

const CreateRoom: React.FunctionComponent<CreateRoomProps> = () => {
  const dispatch = useDispatch();

  const storePlayerName = useSelector(
    (state: RootState) => state.room.playerName
  );

  const [username, setUsername] = useState(storePlayerName || "");

  const createRoomCb = useCallback(() => {
    if (username.length > 2) {
      dispatch(createRoom(username));
    }
  }, [dispatch, username]);

  return (
    <div className="new-room">
      <div className="inputs">
        <FormControl
          placeholder="Username"
          name="player-name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <Button
        onClick={createRoomCb}
        disabled={username.length < 3}
        variant="warning"
        size="lg"
      >
        Create Room
      </Button>
    </div>
  );
};

export default CreateRoom;
