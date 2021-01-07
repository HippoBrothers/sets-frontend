import React, { useCallback, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createRoom } from '../../store/roomActions';

type HomePageProps = {

};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const createRoomCb = useCallback(
    () => {
      if (username.length > 2) {
        dispatch(createRoom(username));
      }
    },
    [dispatch, username],
  );

  return (
    <div className="sets-page sets-page--home">
      <FormControl placeholder="username" />
      <FormControl placeholder="room-id" />
      <Button>Join Room</Button>
      <hr />
      <FormControl placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button
        onClick={createRoomCb}
        disabled={username.length < 2}
      >
        Create Room
      </Button>
    </div>
  );
};

export default HomePage;
