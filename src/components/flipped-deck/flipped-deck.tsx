import React, { useCallback } from 'react';

import * as styled from './flipped-deck.styled';
import { Pokemon } from '../../types/pokemon/pokemon';
import Card from '../atoms/card';
import './flipped-deck.style.css';
export interface Props {
  cards?: Pokemon[];
}

const FlippedDeck = (props: Props) => {
  const { cards } = props ?? {};

  const sortCards = useCallback((a: Pokemon, b: Pokemon) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }, []);

  return (
    <styled.FlippedDeck className="masked-overflow">
      {cards?.sort(sortCards)?.map((filterdCard, index) => {
        return (
          <Card
            title={filterdCard.name}
            image={filterdCard.sprite}
            key={index}
            isFlipped
            {...filterdCard}
          />
        );
      })}
    </styled.FlippedDeck>
  );
};

export default FlippedDeck;
