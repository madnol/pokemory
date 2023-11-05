import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  HTMLProps,
} from "react";

import * as styled from "./card.styled";
import { useSpring } from "@react-spring/web";
export interface Props extends HTMLProps<HTMLDivElement> {
  image: string;
  title?: string;
  isFlipped: boolean;
  onClick?: () => void;
}

export const Card: FunctionComponent<Props> = (props: Props) => {
  const { image, title, isFlipped, onClick, ...otherProps } = props;
  // const [flipped, setFlipped] = useState<boolean>(false);

  const { opacity, transform } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleFlip = useCallback(() => {
    console.log(otherProps.id);
    if (isFlipped) return;
    onClick && onClick();

    console.log();
    // setFlipped(!isFlipped);
    new Audio("https://www.soundjay.com/misc/sounds/page-flip-01a.mp3").play();
  }, [isFlipped, onClick, otherProps.id]);

  useEffect(() => console.log({ title, isFlipped }), [isFlipped, title]);

  return (
    <styled.Card onClick={handleFlip} {...otherProps}>
      <styled.Back
        style={{
          opacity: opacity.to((o) => {
            return 1 - o;
          }),
          transform,
        }}
      />
      <styled.Front
        style={{
          opacity,
          transform: transform.to((t) => {
            return `${t} rotateX(180deg)`;
          }),
        }}
      >
        {<styled.PokeCard src={image} alt="Card front" />}
        <styled.PokeName>{title}</styled.PokeName>
      </styled.Front>
    </styled.Card>
  );
};

export default Card;
