import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { startVote } from '../../store/roomActions';

type EndPageProps = {

};

const EndPage: React.FunctionComponent<EndPageProps> = () => {
  const dispatch = useDispatch();
  return (
    <div className="sets-page sets-page--end">
      <h1>End</h1>
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

export default EndPage;
