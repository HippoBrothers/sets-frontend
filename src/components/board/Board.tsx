import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

import Card from '../card/Card';

import './board.scss';

type BoardProps = {

};

const Board: React.FunctionComponent<BoardProps> = () => {
  const cards = useSelector((state: RootState) => state?.game?.cardsOnBoard);
  return (
    <div className="board">
      {
            (cards || []).map((c, i) => (
              <Card
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                color={c.color}
                number={c.number}
                shape={c.shape}
                fill={c.fill}
                id={i}
              />
            ))
        }
    </div>
  );
};

export default Board;
