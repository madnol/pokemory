import React, { type FunctionComponent, useCallback, useEffect, useState } from 'react';

import * as styled from './board.styled';
import { getPokemonSprite } from '../../api/api';
import { type Pokemon } from '../../types/pokemon/pokemon';
import Card from '../atoms/card';
import Button from '../button/button';
import FlippedDeck from '../flipped-deck';
import Counter from '../counter';

export interface Props {}

export const Board: FunctionComponent<Props> = ({ ...otherProps }) => {
  const [cards, setCards] = useState<Pokemon[]>();
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Pokemon>();
  const [choiceTwo, setChoiceTwo] = useState<Pokemon>();
  const [flippedCards, setFlippedCards] = useState<Pokemon[]>();
  const [score, setScore] = useState(0);
  const [consecutive, setConsecutive] = useState(1);

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
  }, []);

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

  const handleStart = useCallback(() => {
    getSprite();
    setTurns(1);
  }, [getSprite]);
  const handleRestart = useCallback(() => {
    getSprite();
    setScore(0);
    setConsecutive(0);
    setTurns((prevTurns) => prevTurns + 1);
  }, [getSprite]);

  useEffect(() => {
    handleFlippedCards();
  }, [handleFlippedCards]);

  // TODO: Score
  //* Va mostrato sulla destra: DONE
  //* A ogni coppia trovata aumenta il punteggio
  //* Il punteggio aumenta esponenzialmente quado più copie vengono trovate in successione
  const handleScore = useCallback(() => {
    const points = consecutive >= 1 ? consecutive : 1;
    if (choiceOne && choiceTwo) {
      choiceOne.name === choiceTwo.name
        ? setScore((prevScore) => (prevScore >= 1 ? prevScore + points : prevScore + 1))
        : setConsecutive(1);
      choiceOne?.name === choiceTwo?.name && setConsecutive((prev) => prev + 1);
    }
  }, [choiceOne, choiceTwo, consecutive]);

  // TODO: rounds
  //* Va mostrato in basso a destra
  //* Va aggiornato quando l'utente decide di riniziare il gioco

  // const invertTheme = ({ fg, bg }) => ({
  //   fg: bg,
  //   bg: fg,
  // });
  useEffect(() => {
    handleScore();
  }, [handleScore]);

  return (
    <styled.Board>
      <div
        style={{
          gridArea: 'header',

          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Counter name="Turns" score={turns} />

        {!cards && (
          <Button style={{ margin: '40px 0', width: '10em' }} title="Start" onClick={handleStart} />
        )}
        {cards && (
          <Button
            style={{ margin: '40px 0', width: '10em' }}
            title="restart"
            onClick={handleRestart}
          />
        )}
        <Counter name="Score" score={score} />
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
