import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Clipboard from "clipboard";
import { useParams } from "react-router-dom";

import "./shareRoom.scss";

type ShareRoomProps = {};

const ShareRoom: React.FunctionComponent<ShareRoomProps> = () => {
  const params = useParams<{ roomID?: string }>();

  useEffect(() => {
    new Clipboard(".share-room");
  }, []);
  return (
    <Button
      variant="dark"
      className="share-room"
      block
      data-clipboard-text={window.location.href}
    >
      <FontAwesomeIcon icon={faLink} className="icon" />
      {params.roomID}
    </Button>
  );
};

export default ShareRoom;
