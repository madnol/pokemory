import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const Board = styled(animated.div)`
  display: grid;
  /* justify-items: center; */
  width: 100vw;
  height: 100%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas:
    'header header header header header header'
    'aside main main main main empty'
    'aside main main main main empty'
    'aside main main main main empty'
    'aside main main main main empty'
    'footer footer footer footer footer footer';
  @media (max-width: 769px) {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'header header header header'
      'main main main main'
      'main main main main'
      'main main main main'
      'main main main main'
      'footer footer footer footer';
  }
`;

export const PlayGround = styled(animated.div)`
  display: grid;
  position: relative;
  grid-area: main;
  grid-template-rows: subgrid;
  grid-template-columns: subgrid;
  justify-items: center;
`;
