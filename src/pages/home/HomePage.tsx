import React, {useCallback, useState} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {createRoom, joinRoom} from '../../store/roomActions';

type HomePageProps = {};

const HomePage: React.FunctionComponent<HomePageProps> = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [roomID, setRoomID] = useState('');

    const createRoomCb = useCallback(
        () => {
            if (username.length > 2) {
                dispatch(createRoom(username));
            }
        },
        [dispatch, username],
    );

    const joinRoomCb = useCallback(
        () => {
            if (username.length > 2 && roomID.length > 8) {
                dispatch(joinRoom({username: username, roomID: roomID}));
            }
        },
        [dispatch, username, roomID],
    );

    return (
        <div className="sets-page sets-page--home">
            <FormControl placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <Button
                onClick={createRoomCb}
                disabled={username.length < 2}
            >
                Create Room
            </Button>
            <FormControl placeholder="room-id" value={roomID} onChange={(e) => {
                setRoomID(e.target.value)
            }}/>
            <Button
                onClick={joinRoomCb}
                disabled={username.length < 2 || roomID.length < 9}
            >Join Room</Button>
        </div>
    );
};

export default HomePage;
