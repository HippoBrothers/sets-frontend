import React, { useCallback, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../../store/roomActions";
import { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div className="new-room">
      <div className="inputs">
        <FormControl
          placeholder={t('placeholder_username')}
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
        {t("button_create_room")}
      </Button>
    </div>
  );
};

export default CreateRoom;
