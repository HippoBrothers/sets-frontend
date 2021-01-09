/* eslint-disable */

import React, {ReactElement, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCard} from '../../store/slices/gameSlice';
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
    <path xmlns="http://www.w3.org/2000/svg" transform="rotate(90, 20.7675, 55.2575) translate(10,-5)" id="svg_17" d="m-30.7325,41.25031c34.33334,-15.56355 68.66668,15.56355 103.00001,0l0,28.01439c-34.33334,15.56356 -68.66667,-15.56355 -103.00001,0l0,-28.01439z"/>,
    <path xmlns="http://www.w3.org/2000/svg" transform="rotate(90, 27.8375, 63.0763) translate(5,10)" id="svg_15" d="m-10.8748,29.51314l63.75463,0l0,0c8.35204,0 15.12269,8.56132 15.12269,19.12224c0,10.56091 -6.77065,19.12223 -15.12269,19.12223l-63.75463,0l0,0c-8.35203,0 -15.12269,-8.56132 -15.12269,-19.12223c0,-10.56092 6.77066,-19.12224 15.12269,-19.12224z"/>,
    <path xmlns="http://www.w3.org/2000/svg" id="svg_13"
          transform="translate(5,0)"
          d="m0.74211,65.98939c6.21971,-23.49782 17.43352,-43.55322 26.97338,-63.45685c11.09759,12.77289 20.68529,40.87301 29.02666,60.44415c-7.43994,22.63749 -18.14958,43.25405 -27.79755,63.55587c-10.40069,-18.57427 -19.29498,-39.79574 -28.20248,-60.54317l0,0z"/>
];
const generateShape = (shape: any, fillProps: fillProps, color: string, offset: number, key: number) => {
    if (fillProps.insideProps.fill !== "none") {
        fillProps.insideProps.fill = color;
    }
    return (
        <g key={key} transform={`translate(${offset},0)`}>
            <g className={fillProps.gClass}>
                {React.cloneElement(shape, {className: "inside", style: {...fillProps.insideProps}})}
            </g>
            <g x={-1} y={-1}>
                {React.cloneElement(shape, {
                    className: "outside",
                    style: {stroke: color, fill: "none", strokeWidth: 3}
                })}
            </g>
        </g>
    )
};

const colors = [
    "green",
    "red",
    "blue"
];

const numbers = [
    [120],
    [80,160],
    [50,120,190],
];

const filled: fillProps[] = [
    {gClass: undefined, insideProps: {fill: "none"}},
    {gClass: "striped", insideProps: {}},
    {gClass: undefined, insideProps: {}}
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

    const symbols = numbers[number-1].map((it, index) => {
      return generateShape(shapes[shape - 1], filled[fill - 1], colors[color - 1], it, index);
    });

    return (
        <button className={`sets-card ${isSelected ? 'card-selected' : ''}`} type="button" onClick={clickHandler}>
            <svg height={500}>
                <defs>
                    {colors[0]}
                    <pattern id="stripe1" className="stripe" patternUnits="userSpaceOnUse" width="20" height="20">
                        <line x1="0" y1="0" x2="20" y2="20"/>
                    </pattern>
                    <pattern id="stripe2" className="stripe" patternUnits="userSpaceOnUse" x="6" y="6" width="20"
                             height="20">
                        <line x1="0" y1="0" x2="20" y2="20"/>
                    </pattern>
                    <mask id="mask">
                        <rect height="500" width="500" style={{fill: "url(#stripe1)"}}/>
                        <rect height="500" width="500" style={{fill: "url(#stripe2)"}}/>
                    </mask>
                    <style dangerouslySetInnerHTML={{
                        __html: `
      .stripe line {
            fill: white;
            stroke: white;
        }
            .striped {
            mask: url(#mask);
        }
            .diamond {
                rotate: 90deg;
            }
    `
                    }}/>
                </defs>
                {symbols}
            </svg>

        </button>
    );
};

export default Card;
