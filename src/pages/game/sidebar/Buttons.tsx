import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startVote } from "../../../store/roomActions";
import { buzz, validateCards, voteAddCards } from "../../../store/gameActions";
import { RootState } from "../../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faConciergeBell,
  faEyeSlash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

type ButtonsProps = {};

const Buttons: React.FunctionComponent<ButtonsProps> = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.room.gameState);
  const currentPlayer = useSelector((state: RootState) => state.room.playerID);
  const buzzingPlayer = useSelector(
    (state: RootState) => state.game.buzzingPlayer
  );

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (gameState === "playing" && e.code === "Space") {
        // Preventing scroll when pressing Space
        e.preventDefault();
        dispatch(buzz());
      }
      if (gameState === "playing" && e.code === "KeyD") {
        dispatch(voteAddCards());
      }
      if (
        gameState === "buzzed" &&
        currentPlayer === buzzingPlayer &&
        e.code === "Escape"
      ) {
        dispatch(validateCards());
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [dispatch, gameState, buzzingPlayer, currentPlayer]);

  return (
    <>
      {(gameState === "waiting" || gameState === "end") && (
        <Button
          size="lg"
          block
          variant="warning"
          onClick={() => dispatch(startVote())}
        >
          Start
        </Button>
      )}
      {gameState === "playing" && (
        <>
          <Button
            size="lg"
            block
            variant="warning"
            onClick={() => dispatch(buzz())}
          >
            <FontAwesomeIcon icon={faConciergeBell} className="icon" />
            SET !
          </Button>
          <Button
            block
            variant="secondary"
            onClick={() => dispatch(voteAddCards())}
          >
            <FontAwesomeIcon icon={faEyeSlash} className="icon" />
            DEAL
          </Button>
        </>
      )}

      {gameState === "buzzed" && currentPlayer === buzzingPlayer && (
        <Button
          size="lg"
          block
          variant="primary"
          disabled={
            !(gameState === "buzzed" && currentPlayer === buzzingPlayer)
          }
          onClick={() => dispatch(validateCards())}
        >
          <FontAwesomeIcon icon={faTimes} className="icon" />
          Cancel
        </Button>
      )}
    </>
  );
};

export default Buttons;
