import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { getPokemonSprite } from "../../api/api";
import { Pokemon } from "../../types/pokemon/pokemon";

import Card from "../card";

import * as style from "./board.styled";
import Button from "../button/button";
import { animated } from "@react-spring/web";
import styled from "styled-components";

export interface Props {}

export const Board: FunctionComponent<Props> = ({ ...otherProps }) => {
  const [cards, setCards] = useState<Pokemon[]>();
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Pokemon>();
  const [choiceTwo, setChoiceTwo] = useState<Pokemon>();
  const [flippedCards, setFlippedCards] = useState<Pokemon[]>();
  // Get cards randomly
  const getSprite = useCallback(async () => {
    const results: Pokemon[] = [];

    for (let i = 0; i < 8; i++) {
      const { data }: any = await getPokemonSprite(
        Math.ceil(Math.random() * 100)
      );
      results.push({
        id: data?.id,
        name: data?.name,
        sprite: data?.sprites?.front_default,
        matched: false,
      });
    }

    setCards(
      results
        .concat(results)
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .map((foundedCard, index) => ({ ...foundedCard, id: `${index}` }))
    );
    setTurns((prevTurns) => prevTurns + 1);
  }, []);

  // Handle choice
  const handleChoice = useCallback(
    (pokemon: Pokemon) => {
      choiceOne ? setChoiceTwo(pokemon) : setChoiceOne(pokemon);
    },
    [choiceOne]
  );

  // Reset choices & increase turn
  const resetTurn = useCallback(() => {
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
    setTurns((prevTurns) => prevTurns + 1);
  }, []);
  console.log({ choiceOne, choiceTwo });

  const handleFlippedCards = useCallback(() => {
    const matchedCards = cards?.filter((card) => card.matched);
    setFlippedCards(matchedCards);
  }, [cards]);

  // Compare 2 selected card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.sprite === choiceTwo.sprite) {
        setCards((prevCards) =>
          prevCards?.map((card) =>
            card === choiceOne || card === choiceTwo
              ? { ...card, matched: true }
              : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo, resetTurn]);

  const sortCards = (a: Pokemon, b: Pokemon) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  useEffect(() => handleFlippedCards(), [handleFlippedCards]);

  //TODO: Mazzo delle coppie di carte trovate
  //* Il mazzo delle carte deve apparire sulla sinistra
  //* Le carte vengono mostrate appaiate e quando si va sopra con la freccia si espande verticalmente per mostrare e scrollare le carte trovate
  //TODO: Score
  //* Va mostrato sulla destra
  //* Il punteggio aumenta esponenzialmente quado più copie vengono trovate in successione
  //TODO: rounds
  //* Va mostrato in basso a destra
  //* Va aggiornato quando l'utente decide di riniziare il gioco

  // const invertTheme = ({ fg, bg }) => ({
  //   fg: bg,
  //   bg: fg,
  // });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        gap: "5em",
        justifyContent: "center",
      }}
    >
      <FlippedDeck>
        {flippedCards
          ?.sort(sortCards)

          ?.map((filterdCard, index, cards) => {
            return (
              <Card
                style={{
                  border: "1px solid black",
                  borderRadius: 20,
                }}
                title={filterdCard.name}
                image={filterdCard.sprite}
                key={index}
                isFlipped
                {...filterdCard}
              />
            );
          })}
      </FlippedDeck>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{ margin: "40px 0", width: "10em" }}
          title="Start"
          onClick={getSprite}
        />
        <style.PlayGround {...otherProps}>
          {cards?.map((card, index) => {
            return (
              <Card
                style={{
                  opacity: card.matched ? 0 : 1,
                }}
                title={card.name}
                image={card.sprite}
                key={index}
                onClick={() => handleChoice(card)}
                isFlipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                {...card}
              />
            );
          })}
        </style.PlayGround>
      </div>
    </div>
  );
};

export default Board;

const FlippedDeck = styled(animated.div)`
  overflow: scroll;
  position: relative;
  padding: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
  }
  height: 22ch;
  transition: height 0.3s ease-in-out;
  flex-direction: column;
`;
