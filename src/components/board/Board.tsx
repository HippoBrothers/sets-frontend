import React from 'react';

import Card from '../card/Card';

import './board.scss';

type BoardProps = {

};

type SetCard = {
  color: 'red' | 'green' | 'purple',
  number: number,
  shape: 'wave' | 'diamond' | 'round',
  fill: 'plain' | 'hash' | 'empty'
};

const cards: Array<SetCard> = [
  {
    color: 'red', number: 3, shape: 'wave', fill: 'plain',
  },
  {
    color: 'green', number: 3, shape: 'wave', fill: 'plain',
  },
  {
    color: 'red', number: 2, shape: 'round', fill: 'plain',
  },
  {
    color: 'purple', number: 1, shape: 'round', fill: 'plain',
  },
  {
    color: 'red', number: 3, shape: 'diamond', fill: 'plain',
  },
  {
    color: 'red', number: 2, shape: 'diamond', fill: 'plain',
  },
  {
    color: 'purple', number: 3, shape: 'round', fill: 'plain',
  },
  {
    color: 'red', number: 3, shape: 'wave', fill: 'plain',
  },
  {
    color: 'green', number: 2, shape: 'round', fill: 'plain',
  },
  {
    color: 'red', number: 3, shape: 'wave', fill: 'plain',
  },
  {
    color: 'red', number: 3, shape: 'round', fill: 'plain',
  },
  {
    color: 'red', number: 3, shape: 'round', fill: 'plain',
  },
];

const Board: React.FunctionComponent<BoardProps> = () => (
  <div className="board">
    {
            cards.map((c) => (
              <Card
                color={c.color}
                number={c.number}
                shape={c.shape}
                fill={c.fill}
              />
            ))
        }
  </div>
);

export default Board;
