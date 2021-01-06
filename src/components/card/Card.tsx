import React from 'react';

import './card.scss';

type CardProps = {
  color: 'red' | 'green' | 'purple',
  number: number,
  shape: 'wave' | 'diamond' | 'round',
  fill: 'plain' | 'hash' | 'empty'
};

const Card: React.FunctionComponent<CardProps> = ({
  color, number, shape, fill,
}) => (
  <div className="sets-card">
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
  </div>
);

export default Card;
