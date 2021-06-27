import React, { FunctionComponent, useEffect, useState } from 'react'
import { getPokemonSprite } from '../../api/api';

import { pokemons } from '../../types/pokemon/pokemon';

import Card from '../card';

import { PlayGround } from '../styles/lib';


export interface Props {
    pokemons: pokemons[]

}



export const Board: FunctionComponent<Props> = ({
    pokemons,
    ...otherProps
}) => {
    const [deck, setDeck] = useState<string[]>()
    const [pairing, setPairing] = useState<string[]>([])
    const [founded, setFounded] = useState<string[]>([])


    useEffect(() => {
        const getSprite = async () => {
            const results: string[] = [];
            for (let i = 0; i < pokemons.length; i++) {
                const res = await getPokemonSprite(Math.ceil(Math.random() * 100))
                results.push(res?.data?.sprites?.front_default)
            }
            setDeck(results.concat(results).sort(() => (Math.random() > .5) ? 1 : -1))

        };

        getSprite()
    }, [pokemons])

    const handlePairing = (card: string) => {
        pairing.length <= 1 && setPairing([...pairing, card]);
        const check = pairing[0] === pairing[1]
        if (check) {

            setFounded([...founded, ...pairing])
            console.log('founded')
        }

    }



    return (
        <PlayGround {...otherProps}>

            {deck?.map((sprite, index) => <Card handlePairing={handlePairing} pairing={pairing} image={sprite} key={index} />)}
        </PlayGround>
    )
}

export default Board;