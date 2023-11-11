import React, { FunctionComponent, useCallback, HTMLProps } from 'react';

import { useSpring } from '@react-spring/web';

import * as styled from './card.styled';
import Skeleton from '../skeleton';
export interface Props extends HTMLProps<HTMLDivElement> {
  image: string;
  title: string;
  isFlipped: boolean;
  onClick?: () => void;
}

const Card: FunctionComponent<Props> = (props: Props) => {
  const { image, title, isFlipped, onClick, ...otherProps } = props;

  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleFlip = useCallback(() => {
    if (isFlipped) return;
    onClick && onClick();
    // setFlipped(!isFlipped);
    new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3').play();
  }, [isFlipped, onClick]);

  return image && title ? (
    <styled.Card onClick={handleFlip} {...otherProps}>
      <styled.Back
        style={{
          opacity: opacity.to((o) => {
            return 1 - o;
          }),
          transform
        }}
      />
      <styled.Front
        style={{
          opacity,
          transform: transform.to((t) => {
            return `${t} rotateX(180deg)`;
          })
        }}>
        <styled.PokeCard src={image} alt="pokémon sprite" />
        <styled.PokeName>{title}</styled.PokeName>
      </styled.Front>
    </styled.Card>
  ) : (
    <Skeleton width={'100%'} height={'100%'} />
  );
};

export default Card;
