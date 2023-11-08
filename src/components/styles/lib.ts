import { animated } from '@react-spring/web';
import styled from 'styled-components';
// import { animated } from "react-spring";

export const Front = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled(animated.div)`
  background-image: url('https://cdn.dribbble.com/users/51395/screenshots/2859472/pokemon_go_01.gif');
`;

export const PokeCard = styled.img`
  width: 80%;
`;

export const PlayGround = styled(animated.div)`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  background-color: #f2744e;
  color: #fff;
  font-weight: bold;
  padding: 12px 24px;
  margin: 20px;
  transition: filter 0.5s ease-in-out;
  &:hover {
    filter: drop-shadow(0 0 0.5rem rgba(63, 81, 181, 0.5));
  }
  &:active {
    background-color: #f57a65;
  }
`;
