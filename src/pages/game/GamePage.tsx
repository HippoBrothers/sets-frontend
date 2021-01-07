import React from 'react';
import Board from '../../components/board/Board';
import ScoreBoard from '../../components/scoreBoard/ScoreBoard';
import Buttons from './Buttons';

import './GamePage.scss';

type GamePageProps = {

};

const GamePage: React.FunctionComponent<GamePageProps> = () => (
  <div className="sets-page sets-page--game">

    <div className="side-bar">
      <ScoreBoard />

      {/* TODO à déplacer dans un nouveau composant
                Ne pas oublier de bouger le style */}
      <div className="game-button-bar">
        <Buttons />
        {/* <Button size="lg" variant="primary" block>Set !</Button>
        <Button size="sm" variant="secondary" block>Je ne vois rien</Button> */}
      </div>

    </div>

    <div className="main-content">
      <Board />
    </div>
  </div>
);

export default GamePage;
