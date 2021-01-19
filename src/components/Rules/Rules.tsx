import React from "react";

import { Button, Col, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConciergeBell, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Card from "../card/Card";
import { useTranslation } from "react-i18next";
import CopainsPotames from "./CopainPopotame.png";

import "./rules.scss";

type RulesProps = {};

const Rules: React.FunctionComponent<RulesProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="rules">
      <h1>{t("rules_main_header")}</h1>
      <img
        src={CopainsPotames}
        alt="illustration"
        height={150}
        className="img-illustration"
      />
      <h2>But du jeu</h2>
      <div className="rules-part">
        <p>
          Observer les cartes sur le plateau afin de reperer le plus rapidement
          possible un <strong>Set</strong>.
        </p>
      </div>

      <h2>Déroulement d'une partie</h2>
      <div className="rules-part">
        <Row>
          <Col md={6} sm={12}>
            <h4>
              Il y a un <strong>Set</strong>
            </h4>
            <p>
              Dès qu'un joueur voit un <strong>Set</strong> il doit appuyer sur
              le bouton
            </p>
            <Button variant="warning">
              <FontAwesomeIcon icon={faConciergeBell} className="icon" />
              SET !
            </Button>
            <p>
              Une fois le bouton appuyé il suffit de selectionner les 3 cartes
              du <strong>Set</strong>.
            </p>
            <p>
              Si les 3 cartes forment un <strong>Set</strong>, Bingo c'est 1
              point en plus ! Sinon, c'est un point en moins.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <h4>
              Il n'y a pas de <strong>Set</strong>
            </h4>
            <p>
              Si personne ne trouve de <strong>Set</strong>, les joueurs
              appuient sur le bouton{" "}
            </p>
            <Button variant="secondary">
              <FontAwesomeIcon icon={faEyeSlash} className="icon" />
              DEAL
            </Button>
            <p>
              Une fois que tout les joueurs de la partie se sont mis d'accord et
              ont appuyés sur le bouton, 3 nouvelles cartes sont intégrées au
              jeu
            </p>
            <p>
              La recherche de <strong>Set</strong> recommence !
            </p>
          </Col>
        </Row>

        <h4>Fin de partie</h4>
        <p>
          La partie prend fin quand toutes les cartes ont été posés et qu'il n'y
          a plus de <strong>Set</strong> disponible.
        </p>
        <p>Le joueur avec le plus de point remporte la partie.</p>
      </div>

      <h2>Présentation des cartes</h2>
      <div className="rules-part">
        <p>
          Il y a au total 81 cartes differentes dans le jeu, chacunes de ces
          cartes possedent 4 caracteristiques.
        </p>
        <div className="features">
          <div className="feature">
            <h4>La forme </h4>
            <div className="set-sample">
              <div className="set-sample--card">
                <p className="card-feature">Vague</p>
                <Card color={1} number={1} shape={1} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Losange</p>
                <Card color={1} number={1} shape={2} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Ovale</p>
                <Card color={1} number={1} shape={3} fill={3} id={0}></Card>
              </div>
            </div>
          </div>
          <div className="feature">
            <h4>La couleur </h4>
            <div className="set-sample">
              <div className="set-sample--card">
                <p className="card-feature">vert</p>
                <Card color={1} number={1} shape={3} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">orange</p>
                <Card color={2} number={1} shape={3} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">violet</p>
                <Card color={3} number={1} shape={3} fill={3} id={0}></Card>
              </div>
            </div>
          </div>
          <div className="feature">
            <h4>Le nombre </h4>
            <div className="set-sample">
              <div className="set-sample--card">
                <p className="card-feature">Un</p>
                <Card color={2} number={1} shape={2} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Deux</p>
                <Card color={2} number={2} shape={2} fill={3} id={0}></Card>
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Trois</p>
                <Card color={2} number={3} shape={2} fill={3} id={0}></Card>
              </div>
            </div>
          </div>
          <div className="feature">
            <h4>Le remplissage </h4>
            <div className="set-sample">
              <div className="set-sample--card">
                <p className="card-feature">Vide</p>
                <Card color={1} number={1} shape={1} fill={1} id={0} />
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Hachuré</p>
                <Card color={1} number={2} shape={1} fill={2} id={0} />
              </div>
              <div className="set-sample--card">
                <p className="card-feature">Plein</p>
                <Card color={1} number={3} shape={1} fill={3} id={0} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>
        Les <strong>Sets</strong>
      </h2>
      <div className="rules-part">
        <h4>
          Reconnaitres un <strong>Set</strong>
        </h4>
        <p>
          Un <strong>Set</strong> est un ensemble de 3 cartes qui repondent
          simultanement aux 4 règles suivantes :
        </p>
        <ul>
          <li>
            Les formes des symboles sont 3 fois identiques ou 3 fois
            differentes.
          </li>
          <li>
            Les couleurs des symboles sont 3 fois identiques ou 3 fois
            differentes.
          </li>
          <li>
            Les nombres des symboles sont 3 fois identiques ou 3 fois
            differentes.
          </li>
          <li>
            Les remplissages des symboles sont 3 fois identiques ou 3 fois
            differentes.
          </li>
        </ul>
      </div>

      <h2>
        Des exemples de <strong>Sets</strong>
      </h2>
      <div className="rules-part part-example">
        <div className="samples-cat">
          <h4>Des sets qui fonctionnent</h4>
          <div className="samples">
            <div className="sample">
              <div className="set-sample">
                <Card color={1} number={1} shape={1} fill={1} id={0} />
                <Card color={2} number={1} shape={1} fill={1} id={0} />
                <Card color={3} number={1} shape={1} fill={1} id={0} />
              </div>
              <p className="sample-text">
                La couleur est differente, le nombre, la forme et le remplissage
                sont identiques
              </p>
            </div>
            <div className="sample">
              <div className="set-sample">
                <Card color={2} number={2} shape={1} fill={2} id={0} />
                <Card color={2} number={2} shape={2} fill={1} id={0} />
                <Card color={2} number={2} shape={2} fill={3} id={0} />
              </div>
              <p className="sample-text">
                La couleur et le nombre sont identiques, la forme et le
                remplissage sont differents
              </p>
            </div>
            <div className="sample">
              <div className="set-sample">
                <Card color={1} number={3} shape={3} fill={2} id={0} />
                <Card color={2} number={1} shape={2} fill={3} id={0} />
                <Card color={3} number={2} shape={1} fill={1} id={0} />
              </div>
              <p className="sample-text">
                Les 4 caracteristiques sont différentes
              </p>
            </div>
          </div>
        </div>

        <div className="samples-cat">
          <h4>Des sets qui ne fonctionnent pas</h4>
          <div className="samples">
            <div className="sample">
              <div className="set-sample">
                <Card color={2} number={1} shape={1} fill={3} id={0} />
                <Card color={2} number={1} shape={2} fill={3} id={0} />
                <Card color={2} number={3} shape={1} fill={3} id={0} />
              </div>
              <p className="sample-text">
                C'est faux, La couleur est bien identiques, le remplissage aussi
                mais il y à 2 cartes où les nombres sont identiques, et 2 où la
                forme est identique.
              </p>
            </div>
            <div className="sample">
              <div className="set-sample">
                <Card color={3} number={1} shape={3} fill={2} id={0} />
                <Card color={3} number={2} shape={3} fill={1} id={0} />
                <Card color={3} number={3} shape={3} fill={1} id={0} />
              </div>
              <p className="sample-text">
                Tout est bons sauf pour 2 cartes qui ont le mêmes remplissage.
                Le <strong>Set</strong> est faux.
              </p>
            </div>
            <div className="sample">
              <div className="set-sample">
                <Card color={3} number={1} shape={2} fill={2} id={0} />
                <Card color={2} number={2} shape={2} fill={1} id={0} />
                <Card color={2} number={3} shape={2} fill={2} id={0} />
              </div>
              <p className="sample-text">
                C'est faux, 2 cartes seulement ont le mêmes remplissage et 2
                cartes ont la même couleur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
