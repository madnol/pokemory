import React, { FunctionComponent, useState } from 'react'
import { useSpring } from 'react-spring'
import { Pokemon } from '../../types/pokemon/pokemon'



import { Front, Back, CardWrapper, PokeCard } from '../styles/lib'

export interface Props {
    pokemon: Pokemon;
    pairing: Pokemon[];
    founded?: Pokemon[];
    handlePairing: (pokemon: Pokemon) => void;
}


export const Card: FunctionComponent<Props> = ({
    pokemon,
    pairing,
    handlePairing,
    ...otherProps
}) => {
    const [flipped, setFlipped] = useState<boolean>(false)

    const { opacity, transform } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })


    const flip = (pokemon: Pokemon) => {
        pairing.length <= 1 && setFlipped(!flipped)
        pairing.length <= 1 && handlePairing(pokemon)
    }



    return (
        < CardWrapper onClick={() => flip(pokemon)} >
            <Back style={{ opacity: opacity.to(o => 1 - o), transform }} ></Back>
            <Front style={{ opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }}>
                {pokemon?.sprite && <PokeCard src={pokemon.sprite} alt="pokemon" />}
            </Front>
        </CardWrapper >
    )
}










export default Card;
