import React, { type FunctionComponent, useCallback, useEffect, useState } from 'react';

import * as styled from './board.styled';
import { getPokemonSprite } from '../../api/api';
import { type Pokemon } from '../../types/pokemon/pokemon';
import Card from '../atoms/card';
import Button from '../button/button';
import FlippedDeck from '../flipped-deck';

export interface Props {}

export const Board: FunctionComponent<Props> = ({ ...otherProps }) => {
  const [cards, setCards] = useState<Pokemon[]>();
  const [, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Pokemon>();
  const [choiceTwo, setChoiceTwo] = useState<Pokemon>();
  const [flippedCards, setFlippedCards] = useState<Pokemon[]>();

  const getSprite = useCallback(async () => {
    const results: Pokemon[] = [];

    for (let i = 0; i < 8; i++) {
      const { data }: { data?: any } =
        (await getPokemonSprite(Math.ceil(Math.random() * 100))) ?? {};
      results.push({
        id: data?.id,
        name: data?.name,
        sprite: data?.sprites?.front_default,
        matched: false
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
        setCards(
          (prevCards) =>
            prevCards?.map((card) =>
              card === choiceOne || card === choiceTwo ? { ...card, matched: true } : card
            )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo, resetTurn]);

  useEffect(() => {
    handleFlippedCards();
  }, [handleFlippedCards]);

  // TODO: Mazzo delle coppie di carte trovate
  //* Il mazzo delle carte deve apparire sulla sinistra
  //* Le carte vengono mostrate appaiate e quando si va sopra con la freccia si espande verticalmente per mostrare e scrollare le carte trovate
  // TODO: Score
  //* Va mostrato sulla destra
  //* Il punteggio aumenta esponenzialmente quado più copie vengono trovate in successione
  // TODO: rounds
  //* Va mostrato in basso a destra
  //* Va aggiornato quando l'utente decide di riniziare il gioco

  // const invertTheme = ({ fg, bg }) => ({
  //   fg: bg,
  //   bg: fg,
  // });

  return (
    <styled.Board>
      <div
        style={{
          // background: 'green',
          gridArea: '1 / 1 / 1 / 3',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Button style={{ margin: '40px 0', width: '10em' }} title="Start" onClick={getSprite} />
      </div>
      <FlippedDeck cards={flippedCards} />

      <styled.PlayGround {...otherProps}>
        {cards?.map((card, index) => {
          return (
            <Card
              style={{
                opacity: card.matched ? 0 : 1
              }}
              title={card.name}
              image={card.sprite}
              key={index}
              onClick={() => {
                handleChoice(card);
              }}
              isFlipped={card === choiceOne || card === choiceTwo || card.matched}
              {...card}
            />
          );
        })}
      </styled.PlayGround>
    </styled.Board>
  );
};

export default Board;
