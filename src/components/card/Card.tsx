import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCard } from '../../store/slices/gameSlice';
import { RootState } from '../../store/store';

import './card.scss';

type CardProps = {
  color: 'red' | 'green' | 'purple',
  number: number,
  shape: 'wave' | 'diamond' | 'round',
  fill: 'plain' | 'hash' | 'empty',
  id: number;
};

const Card: React.FunctionComponent<CardProps> = ({
  color, number, shape, fill, id,
}) => {
  const dispatch = useDispatch();
  const gameMode = useSelector((state: RootState) => state.room.gameState);
  const isSelected = useSelector((state: RootState) => state.game.selectedCards.includes(id));
  const clickHandler = useCallback(
    () => {
      if (gameMode === 'buzzed') {
        dispatch(selectCard(id));
      }
    },
    [dispatch, gameMode],
  );
  return (
    <button className={`sets-card ${isSelected ? 'card-selected' : ''}`} type="button" onClick={clickHandler}>
      <span>
        color :
        {color}
      </span>
      <span>
        number :
        {number}
      </span>
      <span>
        shape :
        {shape}
      </span>
      <span>
        fill :
        {fill}
      </span>
    </button>
  );
};

export default Card;
