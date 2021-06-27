import React, { FunctionComponent, useState } from 'react'
import { useSpring } from 'react-spring'



import { Front, Back, CardWrapper, Pokemon } from '../styles/lib'

export interface Props {
    image: string;
    text?: string;
    pairing: string[];
    handlePairing: (image: string) => void;
}


export const Card: FunctionComponent<Props> = ({
    image,
    text,
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

    const flip = (sprite: string) => {
        pairing.length <= 1 && setFlipped(!flipped)
        pairing.length <= 1 && handlePairing(sprite)
    }

    return (
        < CardWrapper onClick={() => flip(image)} >
            <Back style={{ opacity: opacity.to(o => 1 - o), transform }} ></Back>
            <Front style={{ opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }}>
                {image && <Pokemon src={image} alt="pokemon" />}
            </Front>
        </CardWrapper >
    )
}










export default Card;
