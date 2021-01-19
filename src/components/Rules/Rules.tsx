import React from "react";

import { Button} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faConciergeBell,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../card/Card";

type RulesProps = {};

const Rules: React.FunctionComponent<RulesProps> = () => {
  return (
    <div className="rules">
      <h1>Rules</h1>
      <h2>
        But du jeu
      </h2>
      <p>Observer les cartes sur le plateau afin de reperer le plus rapidement possible un <strong>Set</strong></p>

      <h2>
        Les règles
      </h2>
      <h3>Déroulement d'une partie</h3>

        <h4>Il y a un <strong>Set</strong></h4>
      <p>Dès qu'un joueur voit un <strong>Set</strong> il doit appuyer sur le bouton</p>
      <Button
            size="lg"
            block
            variant="warning" 
          >
        <FontAwesomeIcon icon={faConciergeBell} className="icon" />
        SET !
      </Button>
      <p>Une fois le bouton appuyer il suffit de selectionner les 3 cartes du <strong>Set</strong>.</p>
      <p>Si les 3 cartes forment un <strong>Set</strong>, Bingo c'est 1 point en plus ! Sinon, c'est un point en moins.</p>
      
      <h4>Il n'y a pas de <strong>Set</strong></h4>
      <p>Si personne ne trouve de <strong>Set</strong>, les joueurs appuient sur le bouton </p>
      <Button
            block
            variant="secondary"
          >
        <FontAwesomeIcon icon={faEyeSlash} className="icon" />
        DEAL
      </Button>
      <p>Une fois que tout les joueurs de la partie se sont mis d'accord 
        et ont appuyés sur le bouton, 3 nouvelles cartes sont intégrées au jeu</p>
      <p>La recherche de <strong>Set</strong> recommence !</p>
      <h4>Fin de partie</h4>
      <p>La partie prend fin quand toutes les cartes ont été posés et qu'il n'y a plus de <strong>Set</strong> disponible.</p>
      <p>Le joueur avec le plus de point remporte la partie.</p>
      
      <h2>Présentation des cartes</h2>
        <p>Il y a au total 81 cartes differentes dans le jeu, chacunes de ces cartes possedent 4 caracteristiques.</p>
        <ul>
          <li>
            <div>
              <p>La forme :</p> 
              <div >
                <p>la vague</p>
                <Card color={1} number={1} shape={1} fill={3} id={0}></Card>
              </div>
              <div>
                <p>le losange</p>
                <Card color={1} number={1} shape={2} fill={3} id={0}></Card>
              </div>
              <div>
                <p>l'ovale</p>
                <Card color={1} number={1} shape={3} fill={3} id={0}></Card>
              </div>
            </div>
            </li>
          <li>
            <div>
              <p>La couleur :</p> 
              <div>
                <p>vert</p>
                <Card color={1} number={1} shape={3} fill={3} id={0}></Card>
              </div>
              <div>
                <p>orange</p>
                <Card color={2} number={1} shape={3} fill={3} id={0}></Card>
              </div>
              <div>
                <p>violet</p>
                <Card color={3} number={1} shape={3} fill={3} id={0}></Card>
              </div>
            </div>
          </li>
          <li>
          <div>
              <p>Le nombre :</p> 
              <div>
                <p>un</p>
                <Card color={2} number={1} shape={2} fill={3} id={0}></Card>
              </div>
              <div>
                <p>deux</p>
                <Card color={2} number={2} shape={2} fill={3} id={0}></Card>
              </div>
              <div>
                <p>trois</p>
                <Card color={2} number={3} shape={2} fill={3} id={0}></Card>
              </div>
            </div>
          </li>
          <li>
          <div>
              <p>Le remplissage :</p>
              <div>
                <p>un</p>
                <Card color={1} number={1} shape={1} fill={1} id={0}/>
              </div>
              <div>
                <p>deux</p>
                <Card color={1} number={2} shape={1} fill={2} id={0}/>
              </div>
              <div>
                <p>trois</p>
                <Card color={1} number={3} shape={1} fill={3} id={0}/>
              </div>
            </div>
          </li>
        </ul>

      <h2>
        Les <strong>Sets</strong>
      </h2>
      <h4>Reconnaitres un <strong>Set</strong></h4>
      <p>Un <strong>Set</strong> est un ensemble de 3 cartes qui repondent simultanement aux 3 règles suivantes :</p>
      <ul>
        <li>Les formes des symboles sont 3 fois identiques ou 3 fois differentes.</li>
        <li>Les couleurs des symboles sont 3 fois identiques ou 3 fois differentes.</li>
        <li>Les nombres des symboles sont 3 fois identiques ou 3 fois differentes.</li>
        <li>Les remplissages des symboles sont 3 fois identiques ou 3 fois differentes.</li>
      </ul>
      

      <h2>Des exemples de <strong>Sets</strong></h2>
        <h4>Des sets qui fonctionnent</h4>
        <ul>
          <li>
            <Card color={1} number={1} shape={1} fill={1} id={0}/>
            <Card color={2} number={1} shape={1} fill={1} id={0}/>
            <Card color={3} number={1} shape={1} fill={1} id={0}/>
            <p>La couleur est differente, le nombre, la forme et le remplissage sont identiques</p>
          </li>
          <li>
            <Card color={2} number={2} shape={1} fill={2} id={0}/>
            <Card color={2} number={2} shape={2} fill={1} id={0}/>
            <Card color={2} number={2} shape={2} fill={3} id={0}/>
            <p>La couleur et le nombre sont identiques, la forme et le remplissage sont differents</p>
          </li>
          <li>
            <Card color={1} number={3} shape={3} fill={2} id={0}/>
            <Card color={2} number={1} shape={2} fill={3} id={0}/>
            <Card color={3} number={2} shape={1} fill={1} id={0}/>
            <p>Les 4 caracteristiques sont différentes</p>
          </li>
        </ul>

        <h4>Des sets qui ne fonctionnent pas</h4>
        <ul>
          <li>
            <Card color={2} number={1} shape={1} fill={3} id={0}/>
            <Card color={2} number={1} shape={2} fill={3} id={0}/>
            <Card color={2} number={3} shape={1} fill={3} id={0}/>
            <p>C'est faux, La couleur est bien identiques, le remplissage aussi mais il y à 2 cartes où 
              les nombres sont identiques, et 2 où la forme est identique.</p>
          </li>
          <li>
            <Card color={3} number={1} shape={3} fill={2} id={0}/>
            <Card color={3} number={2} shape={3} fill={1} id={0}/>
            <Card color={3} number={3} shape={3} fill={1} id={0}/>
            <p>Tout est bons sauf pour 2 cartes qui ont le mêmes remplissage. Le <strong>Set</strong> est faux.</p>
          </li>
          <li>
            <Card color={3} number={1} shape={2} fill={2} id={0}/>
            <Card color={2} number={2} shape={2} fill={1} id={0}/>
            <Card color={2} number={3} shape={2} fill={2} id={0}/>
            <p>C'est faux, 2 cartes seulement ont le mêmes remplissage et 2 cartes ont la même couleur.</p>
          </li>
        </ul>
    </div>
  );
};

export default Rules;
