import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startVote } from '../../store/roomActions';
import { buzz, validateCards, voteAddCards } from '../../store/gameActions';
import { RootState } from '../../store/store';

type ButtonsProps = {

};

const Buttons: React.FunctionComponent<ButtonsProps> = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.room.gameState);
  const currentPlayer = useSelector((state: RootState) => state.room.playerID);
  const buzzingPlayer = useSelector((state: RootState) => state.game.buzzingPlayer);
  return (
    <>
      {
        (gameState === 'waiting' || gameState === 'end') && (
        <Button
          size="lg"
          block
          variant="warning"
          onClick={() => dispatch(startVote())}
        >
          Start
        </Button>
        )
    }

      {
        gameState === 'playing' && (
        <>
          <Button
            size="lg"
            block
            variant="warning"
            disabled={gameState !== 'playing'}
            onClick={() => dispatch(buzz())}
          >
            Buzz
          </Button>
          <Button
            block
            variant="secondary"
            disabled={gameState !== 'playing'}
            onClick={() => dispatch(voteAddCards())}
          >
            Je ne vois rien
          </Button>
        </>
        )
    }

      {
    (gameState === 'buzzed' && currentPlayer === buzzingPlayer) && (
    <Button
      size="lg"
      block
      variant="primary"
      disabled={!(gameState === 'buzzed' && currentPlayer === buzzingPlayer)}
      onClick={() => dispatch(validateCards())}
    >
      Validate
    </Button>
    )
    }

    </>
  );
};

export default Buttons;
