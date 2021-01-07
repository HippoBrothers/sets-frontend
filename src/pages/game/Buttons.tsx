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
      <Button
        size="lg"
        block
        variant="warning"
        disabled={gameState !== 'waiting'}
        onClick={() => dispatch(startVote())}
      >
        Start
      </Button>
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
        size="lg"
        block
        variant="primary"
        disabled={!(gameState === 'buzzed' && currentPlayer === buzzingPlayer)}
        onClick={() => dispatch(validateCards())}
      >
        Validate
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
  );
};

export default Buttons;
