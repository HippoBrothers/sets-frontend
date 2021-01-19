import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useTranslation } from "react-i18next";

import "./cardsLeft.scss";

type CardsLeftProps = {};

const CardsLeft: React.FunctionComponent<CardsLeftProps> = () => {
  const cardsLeftInDeck = useSelector(
    (state: RootState) => state.game.leftInDeck
  );
  const { t } = useTranslation();
  return (
    <div className="cards-left">
      <span className="cards-left-icon">{cardsLeftInDeck}</span>
      <span className="cards-left-text">{t("cards_left")}</span>
    </div>
  );
};

export default CardsLeft;
