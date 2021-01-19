import React, { useCallback, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { joinRoom } from "../../store/roomActions";
import { RootState } from "../../store/store";
import ShareRoom from "../../components/shareRoom/ShareRoom";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div className="join-room">
      <ShareRoom />
      <div className="inputs">
        <FormControl
          placeholder={t("placeholder_username")}
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
        {t("button_join_room")}
      </Button>
    </div>
  );
};

export default JoinRoom;
