import React, { FunctionComponent, useEffect, useState } from 'react'
import { getPokemonSprite } from '../../api/api';
import { Pokemon } from '../../types/pokemon/pokemon';


import Card from '../card';

import { PlayGround } from '../styles/lib';


export interface Props { }



export const Board: FunctionComponent<Props> = ({
    ...otherProps
}) => {
    const [deck, setDeck] = useState<Pokemon[]>()
    const [pairing, setPairing] = useState<Pokemon[]>([])

    useEffect(() => {
        const getSprite = async () => {
            const results: Pokemon[] = [];
            for (let i = 0; i < 8; i++) {
                const res = await getPokemonSprite(Math.ceil(Math.random() * 100))
                results.push({
                    sprite: res?.data?.sprites?.front_default,
                    faceUp: false,
                })
            }
            setDeck(results.concat(results).sort(() => (Math.random() > .5) ? 1 : -1))

        };

        getSprite()

    }, [])

    const handleCheck = (card: Pokemon) => {
        console.log('start')
        const check: boolean = pairing.every(pCard => pCard.sprite === card.sprite)

        if (check) {
            if (deck) {
                const newDeck: Pokemon[] = deck?.map(poke => poke === card ? { ...poke, faceUp: true, } : poke);
                setDeck(newDeck)
            }

            return true
        }


    }


    const handlePairing = (card: Pokemon) => {
        console.log(card)
        pairing.length <= 1 && setPairing([...pairing, card]);
        if (pairing.length === 1) {
            handleCheck(card)
        }
    }


    useEffect(() => {

    }, [pairing])

    return (
        <PlayGround {...otherProps}>
            {console.log(deck)}
            {deck?.map((pokemon, index) => <Card handlePairing={handlePairing} pairing={pairing} pokemon={pokemon} key={index} />)}
        </PlayGround>
    )
}

export default Board;