import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { startVote } from '../../store/roomActions';

type LobbyPageProps = {

};

const LobbyPage: React.FunctionComponent<LobbyPageProps> = () => {
  const dispatch = useDispatch();
  return (
    <div className="sets-page sets-page--lobby">
      <h1>Lobby</h1>
      <Button
        size="lg"
        block
        variant="warning"
        onClick={() => dispatch(startVote())}
      >
        Start
      </Button>
    </div>
  );
};

export default LobbyPage;
