import { animated } from '@react-spring/web';
import { url } from 'inspector';
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  transition:
    filter 0.5s ease-in-out,
    opacity 0.5s ease-in-out;

  &:hover {
    filter: drop-shadow(0 0 0.5rem rgba(63, 81, 181, 0.5));
  }
  & > div {
    position: absolute;
    border-radius: 20px;
    height: 100%;
    aspect-ratio: 1;
    background-color: #ecf0f1;
    background-position: center;
    cursor: pointer;
    will-change: transform, opacity;

    @media (max-width: 769px) {
      width: 100%;
      aspect-ratio: 1;
      height: auto;
    }
  }
`;

export const Front = styled(animated.div)`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 1em; */
  justify-content: center;
  align-items: center;
`;

export const Back = styled(animated.div)`
  background-size: cover;
  background-image: url('https://cdn.dribbble.com/users/51395/screenshots/2859472/pokemon_go_01.gif');
`;

export const PokeName = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  color: #8a2be2;
`;

export const PokeCard = styled.img`
  width: 50%;
`;

export const flipped = styled(animated.div)`
  position: absolute;
  transform: translate(20px, 20px);
`;
