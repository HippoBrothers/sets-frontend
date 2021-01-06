import { createSlice } from '@reduxjs/toolkit';

interface GameSlice {
  cards: Array<any>,
  leftInDeck: number,
}

const initialState: GameSlice = {
  cards: [],
  leftInDeck: 81,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {

  },
});

export default gameSlice.reducer;
