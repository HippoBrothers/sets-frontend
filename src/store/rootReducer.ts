import gameSlice from './slices/gameSlice';
import roomSlice from './slices/roomSlice';

const reducers = {
  game: gameSlice,
  room: roomSlice,
};

export default reducers;
