/* eslint-disable */

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCard } from "../../store/gameActions";
import {RootState} from '../../store/store';

import './card.scss';

type CardProps = {
    color: number,
    number: number,
    shape: number,
    fill: number,
    id: number;
};

type fillProps = {
    gClass: string | undefined,
    insideProps: any,
};

const shapes = [
  <path
    d="m10.07253,36.94435c5.0833,6.79162 18.81158,3.95477 26.87427,1.63653c8.06269,-2.31824 19.80232,-3.3107 33.09916,2.25552c13.29684,5.56622 28.85922,1.69124 38.19246,-4.89203c9.33324,-6.58327 16.72826,-21.21169 10.54108,-27.27992c-6.18719,-6.06823 -20.83266,4.94676 -31.95758,5.69676c-11.12493,0.74999 -19.0831,-0.89772 -31.3644,-5.13913c-12.2813,-4.24141 -17.89599,-3.23285 -27.59398,0.94235c-9.69799,4.1752 -22.87431,19.9883 -17.79101,26.77992z"
    id="wave"
    stroke="null"
  />,
  <path
    d="m65.84932,44.98819c-20.36825,-4.72837 -37.66279,-12.97566 -54.85061,-20.02721c11.29181,-7.75573 35.90819,-14.2438 53.07827,-19.94917c19.6005,5.58793 37.39137,13.48263 54.92432,20.61624c-16.33328,7.18648 -34.94893,13.26565 -53.15197,19.36013l0,0l0,0.00001l-0.00001,0z"
    id="diamond"
    stroke="null"
  />,
  <path
    d="m29.05324,5.91843l71.89351,0l0,0c9.41825,0 17.05324,8.54311 17.05324,19.08157c0,10.53845 -7.63499,19.08156 -17.05324,19.08156l-71.89351,0l0,0c-9.41824,0 -17.05324,-8.54311 -17.05324,-19.08156c0,-10.53846 7.635,-19.08157 17.05324,-19.08157z"
    id="circle"
    stroke="null"
  />,
];
const generateShape = (shape: any, fillProps: fillProps, color: string, offset: number, key: number) => {
    if (fillProps.insideProps.fill !== "none") {
        fillProps.insideProps.fill = color;
    }
    return (
      <g key={key} transform={`translate(0, ${offset})`}>
        <g className={fillProps.gClass}>
          {React.cloneElement(shape, {
            className: "inside",
            style: { ...fillProps.insideProps },
          })}
        </g>
        <g>
          {React.cloneElement(shape, {
            className: "outside",
            style: { stroke: color, fill: "none", strokeWidth: 3 },
          })}
        </g>
      </g>
    );
};

const colors = [
    "#07bf07",
    "#ea0007",
    "#3333ff"
];

const verticalOffset = [[75], [41, 107], [20, 75, 130]];

const filled: fillProps[] = [
    {gClass: undefined, insideProps: {fill: "none"}},
    {gClass: "striped", insideProps: {}},
    {gClass: undefined, insideProps: {opacity: 1}}
];

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

    const symbols = verticalOffset[number - 1].map((it, index) => {
      return generateShape(
        shapes[shape - 1],
        filled[fill - 1],
        colors[color - 1],
        it,
        index
      );
    });

    return (
      <button
        className={`sets-card ${isSelected ? "card-selected" : ""}`}
        type="button"
        onClick={clickHandler}
      >
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 130 200">
          <defs>
            {colors[0]}
            <pattern
              id="stripe1"
              className="stripe"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              {/* Main pattern diagonal */}
              <line x1="0" y1="0" x2="8" y2="8" style={{strokeWidth: 1.5}} />
              {/* Filling the corners with small lines to complete the pattern */}
              <line x1="7" y1="-1" x2="9" y2="1" style={{strokeWidth: 1.5}} />
              <line x1="-1" y1="7" x2="1" y2="9" style={{strokeWidth: 1.5}} />
            </pattern>
            <mask id="mask">
              <rect
                height="50"
                width="130"
                style={{ fill: "url(#stripe1)" }}
              />
            </mask>
          </defs>
          {symbols}
        </svg>
      </button>
    );
};

export default Card;
